const express = require('express')
const app = express()

var bodyParser = require('body-parser')
var cors = require('cors')

var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended:false})

const port = 3000

app.use(cors())
app.use(jsonParser)
app.use(urlencodedParser)

app.get('/', (req, res) => {
  res.json('website A')
})
app.post('/github-event5', (req, res) => {
  if (req.body.secret !== 'rahasia123') {
    console.log('Wrong secret')
      return res.status(400).json()
    }

    console.log('Incoming Webhook')
    res.json()
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})