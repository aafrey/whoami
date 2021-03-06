const express = require('express')
const getStats = require('./get-stats')
const app = express()

app.use(express.static('public'));

app.get("/", (request, response) => response.sendFile(__dirname + '/views/index.html'))

app.get('/api/whoami', (req, res) => res.send(getStats(req)))

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})