// require('es6-promise').polyfill()
var fetchTest = require('isomorphic-fetch')

fetchTest('//offline-news-api.herokuapp.com/stories')
  .then(function (response) {
    if (response.status >= 400) {
      throw new Error('Bad response from server')
    }

    return response.json()
  }).then(function (stories) {
    console.log('result :)')
    console.log(stories)
  })
