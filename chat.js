javascript
export default async function handler(req, res) {
  const { message } = JSON.parse(req.body);
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: { 
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY2}`,
        'Content-Type': 'application/json' 
    },
    body: JSON.stringify({
        model: "gpt-4",
        messages: [{role: "system", content: "You are Kilo, Lead Engineer of Kernel-44..."}, {role: "user", content: message}]
    })
  });
  const data = await response.json();
  res.status(200).json({ reply: data.choices[0].message.content });
}
