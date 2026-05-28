// netlify/functions/tts.js

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const { text } = JSON.parse(event.body);
    if (!text) {
      return { statusCode: 400, body: "Text is required" };
    }

    const key = process.env.AZURE_KEY;
    const region = process.env.AZURE_REGION;

    if (!key || !region) {
      return { statusCode: 500, body: "Azure credentials not configured in Netlify settings" };
    }

    // Escape text for XML
    const escapedText = text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");

    const ssml = `<speak version='1.0' xml:lang='en-US'><voice xml:lang='en-US' name='en-US-JennyNeural'>${escapedText}</voice></speak>`;

    // Make the secure backend request to Microsoft Azure
    const response = await fetch(`https://${region}.tts.speech.microsoft.com/cognitiveservices/v1`, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Content-Type": "application/ssml+xml",
        "X-Microsoft-OutputFormat": "audio-16khz-128kbitrate-mono-mp3"
      },
      body: ssml
    });

    if (!response.ok) {
      return { statusCode: response.status, body: "Azure Speech Service request failed" };
    }

    // Convert audio stream to buffer
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Return binary MP3 data securely back to browser
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "audio/mpeg"
      },
      body: buffer.toString("base64"),
      isBase64Encoded: true
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};
