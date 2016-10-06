var fetch = require('./fetch')
var { apiKey, endpoint } = require('./constants')

module.exports = function () {
  return fetch(`${endpoint}/transactions/509094?api_key=${apiKey}`)
  .then((response) => response.json())
}


