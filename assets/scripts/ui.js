'use strict'
const store = require('./store')

const signInSuccess = function (signInResponse) {
  console.log('signInResponse is', signInResponse)
  store.user = signInResponse.user
  console.log('store.user is' + store.user)
  console.log('store.user.id is' + store.user.id)
}

const signInError = function (error) {
  console.log('Error is ', error)
}

const createCreatureSuccess = function (createCreatureResponse) {
  console.log('createCreatureResponse is ', createCreatureResponse)
}

const createCreatureFail = function (error) {
  console.log('createCreatureError is ', error)
}

const updateCreatureSuccess = function (updateCreatureResponse) {
  console.log('updateCreatureResponse is ', updateCreatureResponse)
}

const updateCreatureFail = function (error) {
  console.log('updateCreatureError is ', error)
}

const getCreaturesSuccess = function (getCreaturesResponse) {
  console.log('getCreaturesResponse is ', getCreaturesResponse)
}

const getCreaturesFail = function (error) {
  console.log('getCreaturesFail is ', error)
}

module.exports = {
  signInSuccess: signInSuccess,
  signInError: signInError,
  createCreatureSuccess: createCreatureSuccess,
  createCreatureFail: createCreatureFail,
  updateCreatureSuccess: updateCreatureSuccess,
  updateCreatureFail: updateCreatureFail,
  getCreaturesSuccess: getCreaturesSuccess,
  getCreaturesFail: getCreaturesFail
}
