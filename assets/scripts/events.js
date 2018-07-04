const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui.js')
const api = require('./api.js')
const store = require('./store.js')

let viewState = 0
store.viewState = viewState

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInError)
}

const onShowSignIn = function (event) {
  event.preventDefault()
  $('#sign-in-form').show()
  $('#show-sign-in').hide()
  $('#show-sign-up').hide()
  $('#show-sign-in-back').show()
}

const onShowSignInBack = function (event) {
  event.preventDefault()
  $('#sign-in-form').hide()
  $('#show-sign-in').show()
  $('#show-sign-up').show()
  $('#show-sign-in-back').hide()
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
}

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onShowSignUp = function (event) {
  event.preventDefault()
  $('#sign-up-form').show()
  $('#show-sign-up').hide()
  $('#show-sign-in').hide()
  $('#show-sign-up-back').show()
}

const onShowSignUpBack = function (event) {
  event.preventDefault()
  $('#sign-up-form').hide()
  $('#show-sign-up').show()
  $('#show-sign-in').show()
  $('#show-sign-up-back').hide()
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFail)
}

const onShowChangePassword = function (event) {
  event.preventDefault()
  $('#change-password-form').show()
  $('#show-change-password-back').show()
  $('#sign-out-button').hide()
  $('#show-change-password').hide()
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
}

const onShowChangePasswordBack = function (event) {
  event.preventDefault()
  $('#change-password-form').hide()
  $('#show-change-password-back').hide()
  $('#sign-out-button').show()
  $('#show-change-password').show()
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signoutFail)
}

const onGoToLab = function (event) {
  event.preventDefault()
  viewState = 1
  store.viewState = 1
  $('#update-lab').show()
  $('#create-lab').show()
  $('.display-creature').hide()
  $('#go-to-lab').hide()
  $('#go-to-viewer').show()
  $('#delete-creature-form').show()
  $('#lab-instructions-wrapper').show()
  $('#viewer-instructions-wrapper').hide()
  $('#instructions-modal').hide()
  $('#viewer-instructions-modal').hide()
}

const onGoToViewer = function (event) {
  event.preventDefault()
  viewState = 0
  store.viewState = 0
  $('#update-lab').hide()
  $('#create-lab').hide()
  $('.display-creature').show()
  $('#go-to-lab').show()
  $('#go-to-viewer').hide()
  $('#delete-creature-form').hide()
  $('#lab-instructions-wrapper').hide()
  $('#viewer-instructions-wrapper').show()
  $('#instructions-modal').hide()
  $('#viewer-instructions-modal').hide()

  const id = store.currentCreatureId
  onShowFromSearch(id)
}

const createCreatureObject = {
  'creature': {
    'user_id': '',
    'name': ''
  }
}

const updateCreatureObject = {
  'creature': {
    'id': '',
    'name': '',
    'cr': '',
    'user_id': '',
    'alignment': '',
    'creature_category': '',
    'subcategory': '',
    'size': '',
    'initiative': '',
    'senses': '',
    'perception': '',
    'languages': '',
    'skills': '',
    'str': '',
    'dex': '',
    'con': '',
    'int': '',
    'wis': '',
    'cha': '',
    'items': '',
    'appearance': '',
    'description': '',
    'environment': '',
    'organization': '',
    'treasure': '',
    'source': '',
    'ac': '',
    'dodgeac': '',
    'flat_footed': '',
    'ac_notes': '',
    'cmd': '',
    'saves': '',
    'hp': '',
    'hd': '',
    'dr': '',
    'fest_healing_regen': '',
    'immunities': '',
    'resistances': '',
    'sr': '',
    'weaknesses': '',
    'defensive_abilities': '',
    'speed': '',
    'melee': '',
    'ranged': '',
    'cmb': '',
    'reach': '',
    'offense_note': '',
    'special_abilities': '',
    'spell_like_abilities': '',
    'spells_known': '',
    'spells_prepared': '',
    'feats': '',
    'additional_special_qualities': ''
  }
}

function UserException (message) {
  this.message = message
  this.name = 'UserException'
}

UserException.prototype.toString = function () {
  return this.name + ': "' + this.message + '"'
}

const onCreateCreature = function (event) {
  event.preventDefault()
  createCreatureObject.creature.user_id = store.user.id
  const data = getFormFields(event.target)
  if (data.name === '') {
    $('#create-new-creature-notifier').text('Please enter a name.')
    $('#create-new-creature-notifier').show()
    $('#create-new-creature-notifier').delay(3000).fadeOut('fast')
    throw new UserException('Please enter a name')
  }
  createCreatureObject.creature.name = data.name
  console.log('data.name is ' + data.name)
  console.log('the stringefy is ' + JSON.stringify(createCreatureObject, null, 4))

  api.createCreature(createCreatureObject)
    .then(ui.createCreatureSuccess)
    .catch(ui.createCreatureFail)
}

const onUpdateCreature = function (event) {
  event.preventDefault()
  console.log('store.currentCreatureId in onUpdateCreature is ' + store.currentCreatureId)
  const data = getFormFields(event.target)
  updateCreatureObject.creature.user_id = store.user.id
  const id = store.currentCreatureId
  updateCreatureObject.creature.id = store.currentCreatureId
  updateCreatureObject.creature.name = data.name
  updateCreatureObject.creature.cr = data.cr
  updateCreatureObject.creature.alignment = data.alignment
  updateCreatureObject.creature.creature_category = data.creature_category
  updateCreatureObject.creature.subcategory = data.subcategory
  updateCreatureObject.creature.size = data.size
  updateCreatureObject.creature.initiative = data.initiative
  updateCreatureObject.creature.senses = data.senses
  updateCreatureObject.creature.perception = data.perception
  updateCreatureObject.creature.languages = data.languages
  updateCreatureObject.creature.skills = data.skills
  updateCreatureObject.creature.str = data.str
  updateCreatureObject.creature.dex = data.dex
  updateCreatureObject.creature.con = data.con
  updateCreatureObject.creature.int = data.int
  updateCreatureObject.creature.wis = data.wis
  updateCreatureObject.creature.cha = data.cha
  updateCreatureObject.creature.items = data.items
  updateCreatureObject.creature.appearance = data.appearance
  updateCreatureObject.creature.description = data.description
  updateCreatureObject.creature.environment = data.environment
  updateCreatureObject.creature.organization = data.organization
  updateCreatureObject.creature.treasure = data.treasure
  updateCreatureObject.creature.source = data.source
  updateCreatureObject.creature.ac = data.ac
  updateCreatureObject.creature.dodgeac = data.dodgeac
  updateCreatureObject.creature.flat_footed = data.flat_footed
  updateCreatureObject.creature.ac_notes = data.ac_notes
  updateCreatureObject.creature.cmd = data.cmd
  updateCreatureObject.creature.saves = data.saves
  updateCreatureObject.creature.hp = data.hp
  updateCreatureObject.creature.hd = data.hd
  updateCreatureObject.creature.dr = data.dr
  updateCreatureObject.creature.fast_healing_regen = data.fast_healing_regen
  updateCreatureObject.creature.immunities = data.immunities
  updateCreatureObject.creature.resistances = data.resistances
  updateCreatureObject.creature.sr = data.sr
  updateCreatureObject.creature.weaknesses = data.weaknesses
  updateCreatureObject.creature.defensive_abilities = data.defensive_abilities
  updateCreatureObject.creature.speed = data.speed
  updateCreatureObject.creature.melee = data.melee
  updateCreatureObject.creature.ranged = data.ranged
  updateCreatureObject.creature.cmb = data.cmb
  updateCreatureObject.creature.reach = data.reach
  updateCreatureObject.creature.offense_note = data.offense_note
  updateCreatureObject.creature.special_abilities = data.special_abilities
  updateCreatureObject.creature.spell_like_abilities = data.spell_like_abilities
  updateCreatureObject.creature.spells_known = data.spells_known
  updateCreatureObject.creature.spells_prepared = data.spells_prepared
  updateCreatureObject.creature.feats = data.feats
  updateCreatureObject.creature.additional_special_qualities = data.additional_special_qualities

  api.updateCreature(updateCreatureObject, id)
    .then(ui.updateCreatureSuccess)
    .catch(ui.updateCreatureFail)
}

const onGetCreatures = function (event) {
  event.preventDefault()

  api.getCreatures()
    .then(ui.getCreaturesSuccess)
    .catch(ui.getCreaturesFail)
}

const onShowCreature = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('data is ' + data)
  // console.log('data is also ' + JSON.stringify(data, null, 4))

  api.showCreature(data)
    .then(ui.showCreatureSuccess)
    .catch(ui.showCreatureFail)
}

const onShowFromSearch = function (searchResult) {
  const data = { 'id': searchResult }

  api.showCreature(data)
    .then(ui.showCreatureSuccess)
    .catch(ui.showCreatureFail)
}

const onDeleteCreature = function (event) {
  event.preventDefault()
  const id = store.currentCreatureId

  api.deleteCreature(id)
    .then(ui.deleteCreatureSuccess)
    .catch(ui.deleteCreatureFail)
}

const instructionsModal = document.getElementById('instructions-modal')
const labInstructionsButton = document.getElementById('lab-instructions-button')
const closeModal = document.getElementsByClassName('close')[0]

labInstructionsButton.onclick = function () {
  instructionsModal.style.display = 'block'
}

closeModal.onclick = function () {
  instructionsModal.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target === instructionsModal) {
    instructionsModal.style.display = 'none'
  }
}

const viewerInstructionsModal = document.getElementById('viewer-instructions-modal')
const viewerInstructionsButton = document.getElementById('viewer-instructions-button')
const closeViewerModal = document.getElementsByClassName('close')[1]

viewerInstructionsButton.onclick = function () {
  viewerInstructionsModal.style.display = 'block'
}

closeViewerModal.onclick = function () {
  viewerInstructionsModal.style.display = 'none'
}

window.onclick = function (event) {
  if (event.target === viewerInstructionsModal) {
    viewerInstructionsModal.style.display = 'none'
  }
}

module.exports = {
  onSignIn: onSignIn,
  onCreateCreature: onCreateCreature,
  updateCreatureObject: updateCreatureObject,
  onUpdateCreature: onUpdateCreature,
  onGetCreatures: onGetCreatures,
  onShowCreature: onShowCreature,
  onDeleteCreature: onDeleteCreature,
  onShowFromSearch: onShowFromSearch,
  onSignUp: onSignUp,
  onShowSignIn: onShowSignIn,
  onShowSignUp: onShowSignUp,
  onGoToLab: onGoToLab,
  onGoToViewer: onGoToViewer,
  onChangePassword: onChangePassword,
  onShowSignInBack: onShowSignInBack,
  onShowSignUpBack: onShowSignUpBack,
  onShowChangePassword: onShowChangePassword,
  onShowChangePasswordBack: onShowChangePasswordBack,
  onSignOut: onSignOut,
  viewState: viewState
}
