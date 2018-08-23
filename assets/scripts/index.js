'use strict'

const events = require('./events')
const search = require('./search')
const publicSearch = require('./public-search')

$(() => {
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#create-creature-form').on('submit', events.onCreateCreature)
  $('#update-creature-form').on('submit', events.onUpdateCreature)
  $('#get-creatures-form').on('submit', events.onGetCreatures)
  $('#show-creature-form').on('submit', events.onShowCreature)
  $('#delete-creature-form').on('submit', events.onDeleteCreature)
  $('#delete-creature-form').hide()
  $('#search').on('click', search.onClick)
  $('#result-list').on('click', search.onResultClick)
  $('#public-search').on('click', publicSearch.onPublicSearch)
  $('#public-result-list').on('click', publicSearch.onResultClick)
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#show-sign-in').on('click', events.onShowSignIn)
  $('#show-sign-up').on('click', events.onShowSignUp)
  $('#search-results').hide()
  $('#update-lab').hide()
  $('#create-lab').hide()
  $('#go-to-lab').on('click', events.onGoToLab)
  $('#go-to-viewer').hide()
  $('#go-to-viewer').on('click', events.onGoToViewer)
  // $('#show-creature-form').hide()
  $('.display-creature').hide()
  $('#show-details').on('click', search.onShowDetails)
  $('.details').hide()
  $('#change-password-form').hide()
  $('#show-sign-up-back').hide()
  $('#show-sign-up-back').on('click', events.onShowSignUpBack)
  $('#show-sign-in-back').hide()
  $('#show-sign-in-back').on('click', events.onShowSignInBack)
  $('#show-change-password').hide()
  $('#show-change-password').on('click', events.onShowChangePassword)
  $('#show-change-password-back').hide()
  $('#show-change-password-back').on('click', events.onShowChangePasswordBack)
  $('#sign-out-button').hide()
  $('#sign-out-button').on('click', events.onSignOut)
  $('#search').hide()
  $('#go-to-lab').hide()
  $('#create-new-creature-notifier').hide()
  $('#update-creature-notifier').hide()
  $('#update-creature-notifier-2').hide()
  $('#delete-creature-notifier').hide()
  $('#lab-instructions-wrapper').hide()
  $('#viewer-instructions-wrapper').hide()
  $('#search-notifier').hide()
})
