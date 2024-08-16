const server = require('@me/server')

console.log('called from app', server.name);
const name = 'app';

module.exports = {
  name
}