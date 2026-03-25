require('dotenv').config()
const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static('.'))

app.post('/histoire', async function(req, res) {
  const { prompt } = req.body

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 1000,
      messages: [{ role: 'user', content: prompt }]
    })
  })

  const data = await response.json()
  res.json(data)
})

app.listen(3000, function() {
  console.log('Serveur lancé sur http://localhost:3000')
})