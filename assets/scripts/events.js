const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui.js')
const api = require('./api.js')

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInError)
}

module.exports = {
  onSignIn: onSignIn
}
