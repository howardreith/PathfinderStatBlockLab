'use strict'

const events = require('./events')

$(() => {
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#create-creature-form').on('submit', events.onCreateCreature)
  $('#update-creature-form').on('submit', events.onUpdateCreature)
  $('#get-creatures-form').on('submit', events.onGetCreatures)
  $('#show-creature-form').on('submit', events.onShowCreature)
  $('#delete-creature-form').on('submit', events.onDeleteCreature)
})
