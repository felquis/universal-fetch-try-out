var http = require('https')

http.get({
  hostname: 'api.pagar.me',
  port: 80,
  path: '/1/',
  agent: false  // create a new agent just for this one request
}, (res) => {
  console.log('auau', res)
});
