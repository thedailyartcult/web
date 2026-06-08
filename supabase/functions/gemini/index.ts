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

    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`

    const prompt = `
      You are the curator of "The Daily Art Cult," a high-end philosophical audio service. 
      A user has shared their current state of mind:
      1. What they are carrying: "${q1}"
      2. Ending or Beginning: "${q2}"
      3. What they need: "${q3}"

      Your task:
      1. Select the most appropriate "territory" from this list: [loss, becoming, longing, belonging, endurance, creation, love, faith, wonder].
      2. Write a "bridge_line": A very short, poetic sentence (max 10 words) that appears as text.
      3. Write an "expanded_text": A 2-sentence, heartwarming, deeply empathetic response that will be read by an AI voice. It should acknowledge their specific struggle and offer a quiet, luxury-toned comfort. Use "unhurried" language.

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
        contents: [{ parts: [{ text: prompt }] }]
      })
    })

    const data = await response.json()
    const resultText = data.candidates[0].content.parts[0].text
    
    // Clean JSON wrapper formatting if Gemini includes markdown markdown code blocks
    const cleanJson = resultText.replace(/```json|```/g, "").trim()
    const parsedResult = JSON.parse(cleanJson)

    return new Response(JSON.stringify(parsedResult), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    })

  } catch (error) {
    console.error("Gemini Error:", error.message)
    // Fallback response to prevent UI from breaking if Google's API crashes
    return new Response(JSON.stringify({
      territory: "becoming",
      bridge_line: "The path clears as you walk it.",
      expanded_text: "I hear the depth of what you've shared. Even in the quietest moments, your growth is unfolding exactly as it should."
    }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    })
  }
})
