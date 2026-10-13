// api/chat.js
export default async function handler(req, res) {
  // 1. Solo aceptamos peticiones POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // 2. Leemos la clave desde las variables de entorno de Vercel (oculta en el servidor)
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Falta la variable GROQ_API_KEY en el servidor' });
  }

  try {
    // 3. La función serverless hace la llamada a Groq de forma segura
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Error interno del servidor' });
  }
}