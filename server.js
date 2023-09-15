const express = require('express')
const fs = require('fs')

const PORT = process.env.PORT || 5001
const app = express()

app.get('/', (req, res) => {
  const query = req.query.root || '.'
  console.log('query', query.root)

  const list = fs.readdirSync(query)
  console.log('list', list)

  res.send(`
  <h1>Query: ${query}</h1>
  <ul>
    ${list.map(item => `<li>${item}</li>`).join('')}
  </ul>`)
})

app.listen(PORT, () => {
  console.log('Server is up on ' + PORT)
})
