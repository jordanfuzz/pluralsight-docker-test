const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Hello Pluralsight!'))

app.listen(port, () => console.log(`Listening on port ${8080}`))

process.on('SIGINT', () => {
  process.exit()
})
