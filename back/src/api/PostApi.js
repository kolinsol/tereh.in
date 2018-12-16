const DB = require('../db/Client')

const PREFIX = 'messages'
const COUNTER = `${PREFIX}:counter`

async function insert(username, text) {
  await DB.incrAsync(COUNTER)
  const id = await DB.getAsync(COUNTER)
  await DB.saddAsync(`${PREFIX}:${username}`, id)
  const message = { id, username, text }
  await DB.setAsync(`${PREFIX}:${id}`, JSON.stringify(message))
}

module.exports = {
  insert
}
