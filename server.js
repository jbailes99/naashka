const express = require('express')
const fs = require('fs')

const PORT = process.env.PORT || 5001
const app = express()

// set the public root to the build folder
app.use(express.static('build'))

app.get('/test', (req, res) => {
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
