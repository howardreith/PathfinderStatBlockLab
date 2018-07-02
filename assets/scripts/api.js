'use strict'

const store = require('./store')
const config = require('./config')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const createCreature = function (createCreatureObject) {
  // console.log('updateCreatureObject is ', updateCreatureObject)
  // console.log('updateCreatureObject stringefy is ' + JSON.stringify(updateCreatureObject, null, 4))
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/creatures',
    data: createCreatureObject,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getCreatures = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/creatures',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showCreature = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/creatures/' + data.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateCreature = function (updateCreatureObject, id) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/creatures/' + id,
    data: updateCreatureObject,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteCreature = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/creatures/' + data.id,
    headers: {
      authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp: signUp,
  signIn: signIn,
  changePassword: changePassword,
  signOut: signOut,
  createCreature: createCreature,
  getCreatures: getCreatures,
  updateCreature: updateCreature,
  showCreature: showCreature,
  deleteCreature: deleteCreature
}
