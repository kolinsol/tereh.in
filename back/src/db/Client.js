const redis = require('redis')

const bluebird = require('bluebird')
bluebird.promisifyAll(redis)

const client = redis.createClient()

client.select(1, redis.print)

module.exports = client
