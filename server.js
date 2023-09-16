const express = require('express')

const PORT = process.env.PORT || 5001
const app = express()

// set the public root to the build folder
app.use(express.static('build'))

app.listen(PORT, () => {
  console.log('The server is up on ' + PORT)
})
