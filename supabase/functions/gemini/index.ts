const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { q1, q2, q3 } = await req.json()
    const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY")
    
    if (!GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not defined in Supabase environment variables.")
    }

    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`

    const prompt = `
      You are the curator of "The Daily Art Cult," a high-end philosophical audio service. 
      A user has shared their current state of mind:
      1. What they are carrying: "${q1}"
      2. Ending or Beginning: "${q2}"
      3. What they need: "${q3}"

      Your task:
      1. Select the most appropriate "territory" from this list: [loss, becoming, longing, belonging, endurance, creation, love, faith, wonder].
         - If the user discusses death, bereavement, or deep grieving, you MUST select "loss".
      2. Write a "bridge_line": A very short, poetic sentence (max 10 words) that appears as text.
      3. Write an "expanded_text": A 2-sentence, heartwarming, deeply empathetic response that will be read by an AI voice. It should acknowledge their specific struggle with profound dignity and offer a quiet, luxury-toned comfort. Use "unhurried", calm language.

      Return ONLY a JSON object in this format:
      {
        "territory": "chosen_word",
        "bridge_line": "...",
        "expanded_text": "..."
      }
    `

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          responseMimeType: "application/json"
        },
        // Adjust safety settings to allow personal discussion of death/grief without blocking
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_ONLY_HIGH"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_ONLY_HIGH"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_ONLY_HIGH"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_ONLY_HIGH"
          }
        ]
      })
    })

    if (!response.ok) {
      const errText = await response.text()
      throw new Error(`Gemini API returned status ${response.status}: ${errText}`)
    }

    const data = await response.json()
    
    if (!data.candidates || data.candidates.length === 0) {
      throw new Error("No response candidates returned.")
    }

    const candidate = data.candidates[0]

    // If the safety filter still blocks the output, provide a beautiful, custom loss response
    if (candidate.finishReason === "SAFETY") {
      console.warn("Gemini prompt flagged by safety system. Using sensitive fallback.")
      return new Response(JSON.stringify({
        territory: "loss",
        bridge_line: "To carry grief is to have loved deeply.",
        expanded_text: "I hear the weight of the loss you are carrying. In the presence of such deep absence, there are no easy answers—only the quiet space to hold what remains."
      }), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      })
    }

    const resultText = candidate.content.parts[0].text
    const parsedResult = JSON.parse(resultText.trim())

    return new Response(JSON.stringify(parsedResult), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    })

  } catch (error) {
    console.error("Gemini Error:", error.message)
    
    // A much gentler, neutral, and respectful general fallback in case of connection failure
    return new Response(JSON.stringify({
      territory: "loss",
      bridge_line: "The quiet weight of what we carry.",
      expanded_text: "I am listening to what you have shared. In the silence of this moment, your thoughts are met with deep care and unhurried space."
    }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    })
  }
})
