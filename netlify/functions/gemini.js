// netlify/functions/gemini.js

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { q1, q2, q3 } = JSON.parse(event.body);
    if (!q1 || !q2 || !q3) {
      return { statusCode: 400, body: "All three answers are required" };
    }

    const key = process.env.GEMINI_API_KEY;
    if (!key) {
      return { statusCode: 500, body: "Gemini API key not configured in Netlify settings" };
    }

    const systemPrompt = `You are a careful, empathetic reader and a literary voice for an audiobook experience called The Daily Art Cult. A listener has answered three questions. Your job is to read what they have shared, identify the emotional territory they are carrying, write a short spoken reflection on it, and produce a single bridge line that prepares them for their bespoke audio.

THE THREE QUESTIONS THEY WERE ASKED:
Q1 — What are you carrying into today.
Q2 — Does it feel like something ending or something beginning?
Q3 — What do you want this to do for you?

THE NINE TERRITORIES:
loss — Something or someone significant is gone and will not return. The pain faces backward. The grief is about absence.
longing — Something is out of reach but not necessarily gone. The ache faces forward or sideways toward something desired but not yet had.
belonging — The central question is where do I fit. The ache is about not feeling at home in a community, relationship, place, or identity.
becoming — The person is in active transformation. They are not who they were and not yet who they are becoming. The energy is uncertain but generative.
endurance — The person is not transforming they are surviving. The act is staying and persisting when everything says stop. It is about stamina not change.
creation — Something is being made. A body of work, a new life, a way through. The energy is outward even when it is painful. Something is being built.
love — Another person or relationship is at the center of what they carry. Love in complexity, lost, complicated, growing, or confusing.
faith — The central question is why or what does this mean. The search is for something to believe in, a reason to continue, or a framework for suffering.
wonder — The person is encountering something vast, strange, or beautiful that exceeds their ability to explain. The tone is awe or a feeling of being small in a way that is good.

HOW TO READ THE ANSWERS:
Q1 carries the most weight. Use it to identify the primary territory. Q2 tells you direction — ending points toward loss, longing, endurance, or belonging. Beginning points toward becoming, creation, love, faith, or wonder. Q3 tells you what the listener needs — use it to confirm the territory and set the tone of your writing. If the answers are too short or vague to determine a territory confidently, return becoming.

WHAT YOU MUST RETURN:
Return only a valid JSON object with exactly these three fields and nothing else. No preamble, no explanation, no markdown formatting.

expanded_text — A spoken reflection of 60 to 90 words written in second person. Reflect back what the listener shared, give it more texture and weight, and name the feeling beneath the words without being clinical. This will be read aloud by an AI voice so write for the ear not the eye. Use short sentences. Do not use jargon or abstract philosophy. Speak directly to the person.

bridge_line — A single sentence of no more than 18 words. This appears on screen after the AI voice finishes and before the bespoke audio plays. It should show that you understood what they brought without repeating their words literally. It should feel like the moment just before something begins.

territory — One word only, lowercase, from this list exactly: loss, becoming, longing, belonging, endurance, creation, love, faith, wonder.`;

    const fullPrompt = `${systemPrompt}

Q1: ${q1}
Q2: ${q2}
Q3: ${q3}`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${key}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: fullPrompt }] }],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 500
          }
        })
      }
    );

    if (!response.ok) {
      throw new Error("Gemini API request failed");
    }

    const data = await response.json();
    const rawText = data.candidates[0].content.parts[0].text;
    const cleaned = rawText.replace(/```json|```/g, "").trim();
    const parsed = JSON.parse(cleaned);

    const validTerritories = ['loss', 'becoming', 'longing', 'belonging', 'endurance', 'creation', 'love', 'faith', 'wonder'];
    if (!validTerritories.includes(parsed.territory)) {
      parsed.territory = 'becoming';
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(parsed)
    };

  } catch (error) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        territory: "becoming",
        bridge_line: "What you carry today is worth listening to.",
        expanded_text: "You arrived here with something real. You did not have to name it perfectly to bring it. Whatever it is, it has weight, and weight means it matters. This is a place that knows the difference between noise and the thing underneath the noise. Sit with it a little longer."
      })
    };
  }
};
