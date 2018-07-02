'use strict'

const events = require('./events')
const search = require('./search')

$(() => {
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#create-creature-form').on('submit', events.onCreateCreature)
  $('#update-creature-form').on('submit', events.onUpdateCreature)
  $('#get-creatures-form').on('submit', events.onGetCreatures)
  $('#show-creature-form').on('submit', events.onShowCreature)
  $('#delete-creature-form').on('submit', events.onDeleteCreature)
  $('#search').on('click', search.onClick)
  $('#result-list').on('click', search.onResultClick)
})
