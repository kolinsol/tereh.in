const DB = require('../db/Client')

const MESSAGES = 'messages'
const COUNTER = 'counter'

async function insert(username, text) {
  await DB.incrAsync(`${MESSAGES}:${COUNTER}`)
  const id = await DB.getAsync(`${MESSAGES}:${COUNTER}`)
  await DB.saddAsync(`${MESSAGES}:${username}`, id)
  const message = { id, username, text }
  await DB.hsetAsync(MESSAGES, id, JSON.stringify(message))
}

async function getAll() {
  const rawMessages = await DB.hvalsAsync(MESSAGES)
  const messages = rawMessages.map(JSON.parse)
  return messages
}

module.exports = {
  insert,
  getAll
}
