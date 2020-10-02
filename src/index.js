const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => res.send('Hello world!!'))

app.listen(port, () => console.log(`Listening on port ${80}`))

process.on('SIGINT', () => {
  process.exit()
})
