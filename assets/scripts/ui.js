'use strict'
const store = require('./store')

const signInSuccess = function (signInResponse) {
  console.log('signInResponse is', signInResponse)
  store.user = signInResponse.user
}

const signInError = function (error) {
  console.log('Error is ', error)
}

module.exports = {
  signInSuccess: signInSuccess,
  signInError: signInError
}
