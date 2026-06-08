const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests (required when invoking from web browsers)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { q1, q2, q3 } = await req.json()
    const GEMINI_API_KEY = Deno.env.get("GEMINI_API_KEY")
    
    if (!GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not defined in Supabase environment variables.")
    }

    // Updated model to gemini-2.5-flash to prevent the 404 Not Found error
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`

    const prompt = `
      You are the curator of "The Daily Art Cult," a high-end, deeply sensitive, and articulate philosophical companion. 
      A user has trusted you with an exclusive, highly vulnerable, and raw part of their life. 
      Here is what they shared:
      1. What they are carrying: "${q1}"
      2. Ending or Beginning: "${q2}"
      3. What they need from this: "${q3}"

      Your task is to honor this trust by writing a response that is completely unique, highly conversational, and deeply empathetic. 

      Follow these strict instructions:
      1. SELECT THE TRUEST EMOTIONAL "TERRITORY":
         - Choose exactly one from: [loss, becoming, longing, belonging, endurance, creation, love, faith, wonder].
         - Do not treat grief as a flat default. If they talk about a mother passing but seek connection or peace, choose the territory that matches the truest spiritual tone of their input (e.g., "love", "longing", "endurance", "belonging", or "wonder").
      2. WRITE A "bridge_line":
         - A very short, poetic, custom sentence (max 10 words) that directly speaks to the specific gravity of their input. Never repeat standard templates.
      3. WRITE AN "expanded_text":
         - Write exactly 2-3 warm, deeply conversational sentences.
         - You MUST act as an active listener. Gently and respectfully reference specific elements or concepts they shared (e.g., if they mention their mother, reference that memory with immense dignity).
         - NEVER use generic, pre-written AI transitions, templates, or cliches (such as "I hear the depth of what you shared", "your growth is unfolding", "even in the quietest moments"). 
         - Speak to them like an articulate, compassionate companion who has stopped to write them a direct, personal letter. Keep the language calm, unhurried, and luxury-toned.

      Return ONLY a JSON object in this exact format:
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
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_NONE"
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_NONE"
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

    const resultText = data.candidates[0].content.parts[0].text
    const parsedResult = JSON.parse(resultText.trim())

    return new Response(JSON.stringify(parsedResult), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    })

  } catch (error) {
    console.error("Gemini Error:", error.message)
    
    return new Response(JSON.stringify({
      territory: "loss",
      bridge_line: "In the quiet space of what remains.",
      expanded_text: "I am holding close what you have shared. When words fall short, please know that your thoughts are met here with absolute dignity, quiet attention, and an unhurried peace."
    }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    })
  }
})
