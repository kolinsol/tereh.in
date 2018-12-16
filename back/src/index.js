const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const PostApi = require('./api/PostApi')

const app = express()

const PORT = 9990

app.use(morgan('combined'))
app.use(bodyparser.json())
app.use(cors())

app.get('/', (req, res) => res.send('Hello!'))

app.get('/posts', (req, res) => {
  res.send(
    [{
      id: 1,
      title: "Hello World!",
      description: "Hi there! How are you?"
    }]
  )
})

app.post('/post', (req, res) => {
  const body = req.body

  const name = body.name
  const message = body.message

  PostApi.insert(name, message)

  res.end()
})


app.listen(PORT, () => console.log(`Listening on ${PORT}...`))
