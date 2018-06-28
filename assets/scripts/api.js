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

const createCreature = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/creatures',
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

const showCreature = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/creatures/' + store.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateCreature = function (updateCreatureObject) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/creatures/' + store.id,
    data: updateCreatureObject,
    headers: {
      Authorization: 'Token token=' + store.user.token
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
  showCreature: showCreature
}
