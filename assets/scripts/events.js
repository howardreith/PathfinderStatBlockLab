const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui.js')
const api = require('./api.js')
const store = require('./store.js')

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInError)
}

const createCreatureObject = {
  'creature': {
    'name': '',
    'cr': '',
    'user_id': ''
  }
}

const onCreateCreature = function (event) {
  event.preventDefault()
  // console.log('createCreatureObject before the AJAX request is ' + createCreatureObject)
  // console.log('the stringefy before the AJAX is ' + JSON.stringify(createCreatureObject, null, 4))
  const data = getFormFields(event.target)
  // console.log('data is ', data)
  createCreatureObject.creature.name = data.name
  createCreatureObject.creature.cr = data.cr
  createCreatureObject.creature.user_id = store.user.id
  // console.log('the stringefy is ' + JSON.stringify(createCreatureObject, null, 4))

  api.createCreature(createCreatureObject)
    .then(ui.createCreatureSuccess)
    .catch(ui.createCreatureFail)
}

const onUpdateCreature = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  createCreatureObject.creature.id = data.id
  // We probably want this ^ to not be a fillable field in the future.
  // Have it pull from the statistics for the search result when it's selected.
  createCreatureObject.creature.name = data.name
  createCreatureObject.creature.cr = data.cr
  createCreatureObject.creature.user_id = store.user.id

  api.updateCreature(createCreatureObject, data)
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

  api.showCreature(data)
    .then(ui.showCreatureSuccess)
    .catch(ui.showCreatureFail)
}

const onDeleteCreature = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.deleteCreature(data)
    .then(ui.deleteCreatureSuccess)
    .catch(ui.deleteCreatureFail)
}

module.exports = {
  onSignIn: onSignIn,
  onCreateCreature: onCreateCreature,
  createCreatureObject: createCreatureObject,
  onUpdateCreature: onUpdateCreature,
  onGetCreatures: onGetCreatures,
  onShowCreature: onShowCreature,
  onDeleteCreature: onDeleteCreature
}
