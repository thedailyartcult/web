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
    const { text } = await req.json()
    const key = Deno.env.get("AZURE_SPEECH_KEY")
    const region = Deno.env.get("AZURE_SPEECH_REGION") || "eastus"

    if (!key) {
      throw new Error("AZURE_SPEECH_KEY is not defined in Supabase environment variables.")
    }

    // Escape special characters for SSML
    const escapedText = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;")

    // Use "en-US-AndrewNeural" with the native "empathetic" style markup
    const ssml = `
      <speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xmlns:mstts="https://www.w3.org/2001/mstts" xml:lang="en-US">
        <voice name="en-US-AndrewNeural">
          <mstts:express-as style="empathetic" styledegree="1.2">
            <prosody rate="-15%" pitch="-8%">
              ${escapedText}
            </prosody>
          </mstts:express-as>
        </voice>
      </speak>`

    const response = await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-16khz-128kbitrate-mono-mp3",
        "User-Agent": "DailyArtCult"
      },
      body: ssml
    })

    if (!response.ok) {
      throw new Error(`Azure Error: ${response.status}`)
    }

    const arrayBuffer = await response.arrayBuffer()

    return new Response(arrayBuffer, {
      status: 200,
      headers: { 
        ...corsHeaders, 
        "Content-Type": "audio/mpeg" 
      }
    })

  } catch (error) {
    console.error("TTS Error:", error.message)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" }
    })
  }
})
