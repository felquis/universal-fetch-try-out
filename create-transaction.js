const fetch = require('./fetch')
const { apiKey, endpoint } = require('./constants')
const getTransaction = require('./get-transaction')

const createTransaction = (card_id, amount) => {
  return fetch(`${endpoint}/transactions`, {
    method: 'post',
    body: JSON.stringify({
      api_key: apiKey,
      amount: amount,
      card_id: card_id
    })
  }).then((response) => response.json())
}

getTransaction()
  .then((transaction) => transaction.card)
  .then((card) => card.id)
  .then((card_id) => createTransaction(card_id, 1000))
  .then((a) => {
    console.log(a)
  })
  .catch((cat) => {
    console.log(cat)
  })

