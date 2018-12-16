const DB= require('../db/Client')
const { ulid } = require('ulid')

module.exports = {
  insert(name, message) {
    const id = ulid()
    console.log(`id: ${id}, name: ${name}, massage: ${msg}`)
  }
}
