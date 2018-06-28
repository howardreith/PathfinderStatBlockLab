'use strict'

const events = require('./events')

$(() => {
  $('#sign-in-form').on('submit', events.onSignIn)
})
