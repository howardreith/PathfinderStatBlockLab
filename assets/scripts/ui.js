'use strict'
const store = require('./store')

const signInSuccess = function (signInResponse) {
  console.log('signInResponse is', signInResponse)
  store.user = signInResponse.user
  // console.log('store.user is' + store.user)
  // console.log('store.user.id is' + store.user.id)
}

const signInError = function (error) {
  console.log('Error is ', error)
}

const signUpSuccess = function (signUpResponse) {
  console.log('signUpResponse is ', signUpResponse)
}

const signUpFail = function (error) {
  console.log('signUpFail is ', error)
}

const changePasswordSuccess = function (changePasswordResponse) {
  console.log('changePasswordResponse is ', changePasswordResponse)
}

const changePasswordFail = function (error) {
  console.log('changePasswordFail is ', error)
}

const createCreatureSuccess = function (createCreatureResponse) {
  console.log('createCreatureResponse is ', createCreatureResponse)
  store.currentCreatureId = createCreatureResponse.creature.id
  $('#update-id').text('Creature ID: ' + store.currentCreatureId)
  document.getElementById('update-creature-form').reset()
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

const showCreatureSuccess = function (showCreatureResponse) {
  console.log('showCreatureResponse is ', showCreatureResponse)
  $('.display-creature').show()
  store.currentCreatureId = showCreatureResponse.creature.id
  $('#display-name').text('Name: ' + showCreatureResponse.creature.name)
  $('#display-cr').text('CR: ' + showCreatureResponse.creature.cr)
  $('#display-alignment').text('Alignment: ' + showCreatureResponse.creature.alignment)
  $('#display-creature_category').text('Type: ' + showCreatureResponse.creature.creature_category)
  $('#display-subcategory').text('(' + showCreatureResponse.creature.subcategory + ')')
  $('#display-size').text('Size: ' + showCreatureResponse.creature.size)
  $('#display-initiative').text('Initiative: +' + showCreatureResponse.creature.initiative)
  $('#display-senses').text('Senses: ' + showCreatureResponse.creature.senses)
  $('#display-perception').text('Perception: ' + showCreatureResponse.creature.perception)
  $('#display-languages').text('Languages: ' + showCreatureResponse.creature.languages)
  $('#display-skills').text('Skills: ' + showCreatureResponse.creature.skills)
  $('#display-str').text('Str: ' + showCreatureResponse.creature.str)
  $('#display-dex').text('Dex: ' + showCreatureResponse.creature.dex)
  $('#display-con').text('Con: ' + showCreatureResponse.creature.con)
  $('#display-int').text('Int: ' + showCreatureResponse.creature.int)
  $('#display-wis').text('Wis: ' + showCreatureResponse.creature.wis)
  $('#display-cha').text('Cha: ' + showCreatureResponse.creature.cha)
  $('#display-items').text('Items: ' + showCreatureResponse.creature.items)
  $('#display-appearance').text('Appearance: ' + showCreatureResponse.creature.appearance)
  $('#display-description').text('Description: ' + showCreatureResponse.creature.description)
  $('#display-environment').text('Environment: ' + showCreatureResponse.creature.environment)
  $('#display-organization').text('Organization: ' + showCreatureResponse.creature.organization)
  $('#display-treasure').text('Treasure: ' + showCreatureResponse.creature.treasure)
  $('#display-source').text('Source: ' + showCreatureResponse.creature.source)
  $('#display-ac').text('AC: ' + showCreatureResponse.creature.ac)
  $('#display-dodgeac').text('Touch: ' + showCreatureResponse.creature.dodgeac)
  console.log('dodgeac is ' + showCreatureResponse.creature.dodgeac)
  $('#display-flat_footed').text('Flat-Footed: ' + showCreatureResponse.creature.flat_footed)
  $('#display-ac_notes').text('AC Notes: ' + showCreatureResponse.creature.ac_notes)
  $('#display-cmd').text('CMD: ' + showCreatureResponse.creature.cmd)
  $('#display-saves').text('Saves: ' + showCreatureResponse.creature.saves)
  $('#display-hp').text('HP: ' + showCreatureResponse.creature.hp)
  $('#display-hd').text('HD: ' + showCreatureResponse.creature.hd)
  $('#display-dr').text('DR: ' + showCreatureResponse.creature.dr)
  $('#display-fast_healing_regen').text('Healing Abilities: ' + showCreatureResponse.creature.fast_healing_regen)
  $('#display-immunities').text('Immunities: ' + showCreatureResponse.creature.immunities)
  $('#display-resistances').text('Resistances: ' + showCreatureResponse.creature.resistances)
  $('#display-sr').text('SR: ' + showCreatureResponse.creature.sr)
  $('#display-weaknesses').text('Weaknesses: ' + showCreatureResponse.creature.weaknesses)
  $('#display-defensive_abilities').text('Defensive Abilities: ' + showCreatureResponse.creature.defensive_abilities)
  $('#display-speed').text('Speed: ' + showCreatureResponse.creature.speed)
  $('#display-speed_note').text('Speed Note: ' + showCreatureResponse.creature.speed_note)
  $('#display-melee').text('Melee: ' + showCreatureResponse.creature.melee)
  $('#display-ranged').text('Ranged: ' + showCreatureResponse.creature.ranged)
  $('#display-cmb').text('CMB: ' + showCreatureResponse.creature.cmb)
  $('#display-reach').text('Reach: ' + showCreatureResponse.creature.reach)
  $('#display-offense_note').text('Offense Note: ' + showCreatureResponse.creature.offense_note)
  $('#display-special_abilities').text('Special Abilities: ' + showCreatureResponse.creature.special_abilities)
  $('#display-spell_like_abilities').text('Spell-like Abilities: ' + showCreatureResponse.creature.spell_like_abilities)
  $('#display-spells_known').text('Spells Known: ' + showCreatureResponse.creature.spells_known)
  $('#display-spells_prepared').text('Spells Prepared: ' + showCreatureResponse.creature.spells_prepared)
  $('#display-feats').text('Feats: ' + showCreatureResponse.creature.feats)
  $('#display-additional_special_qualities').text('Additional Special Qualities: ' + showCreatureResponse.creature.additional_special_qualities)
  // This section begins the update lab portion
  $('#update-id').text('Creature ID: ' + store.currentCreatureId)
  document.getElementById('update-name').value = showCreatureResponse.creature.name
  document.getElementById('update-cr').value = showCreatureResponse.creature.cr
  document.getElementById('update-alignment').value = showCreatureResponse.creature.alignment
  document.getElementById('update-creature_category').value = showCreatureResponse.creature.creature_category
  document.getElementById('update-subcategory').value = showCreatureResponse.creature.subcategory
  document.getElementById('update-size').value = showCreatureResponse.creature.size
  document.getElementById('update-initiative').value = showCreatureResponse.creature.initiative
  document.getElementById('update-senses').value = showCreatureResponse.creature.senses
  document.getElementById('update-perception').value = showCreatureResponse.creature.perception
  document.getElementById('update-languages').value = showCreatureResponse.creature.languages
  document.getElementById('update-skills').value = showCreatureResponse.creature.skills
  document.getElementById('update-str').value = showCreatureResponse.creature.str
  document.getElementById('update-dex').value = showCreatureResponse.creature.dex
  document.getElementById('update-con').value = showCreatureResponse.creature.con
  document.getElementById('update-int').value = showCreatureResponse.creature.int
  document.getElementById('update-wis').value = showCreatureResponse.creature.wis
  document.getElementById('update-cha').value = showCreatureResponse.creature.cha
  document.getElementById('update-items').value = showCreatureResponse.creature.items
  document.getElementById('update-appearance').value = showCreatureResponse.creature.appearance
  document.getElementById('update-description').value = showCreatureResponse.creature.description
  document.getElementById('update-environment').value = showCreatureResponse.creature.environment
  document.getElementById('update-organization').value = showCreatureResponse.creature.organization
  document.getElementById('update-treasure').value = showCreatureResponse.creature.treasure
  document.getElementById('update-ac').value = showCreatureResponse.creature.ac
  document.getElementById('update-dodgeac').value = showCreatureResponse.creature.dodgeac
  document.getElementById('update-flat_footed').value = showCreatureResponse.creature.flat_footed
  document.getElementById('update-ac_notes').value = showCreatureResponse.creature.ac_notes
  document.getElementById('update-cmd').value = showCreatureResponse.creature.cmd
  document.getElementById('update-saves').value = showCreatureResponse.creature.saves
  document.getElementById('update-hp').value = showCreatureResponse.creature.hp
  document.getElementById('update-hd').value = showCreatureResponse.creature.hd
  document.getElementById('update-dr').value = showCreatureResponse.creature.dr
  document.getElementById('update-fast_healing_regen').value = showCreatureResponse.creature.fast_healing_regen
  document.getElementById('update-immunities').value = showCreatureResponse.creature.immunities
  document.getElementById('update-resistances').value = showCreatureResponse.creature.resistances
  document.getElementById('update-sr').value = showCreatureResponse.creature.sr
  document.getElementById('update-weaknesses').value = showCreatureResponse.creature.weaknesses
  document.getElementById('update-defensive_abilities').value = showCreatureResponse.creature.defensive_abilities
  document.getElementById('update-speed').value = showCreatureResponse.creature.speed
  document.getElementById('update-melee').value = showCreatureResponse.creature.melee
  document.getElementById('update-ranged').value = showCreatureResponse.creature.ranged
  document.getElementById('update-cmb').value = showCreatureResponse.creature.cmb
  document.getElementById('update-reach').value = showCreatureResponse.creature.reach
  document.getElementById('update-offense_note').value = showCreatureResponse.creature.offense_note
  document.getElementById('update-special_abilities').value = showCreatureResponse.creature.special_abilities
  document.getElementById('update-spell_like_abilities').value = showCreatureResponse.creature.spell_like_abilities
  document.getElementById('update-spells_known').value = showCreatureResponse.creature.spells_known
  document.getElementById('update-spells_prepared').value = showCreatureResponse.creature.spells_prepared
  document.getElementById('update-feats').value = showCreatureResponse.creature.feats
  document.getElementById('update-additional_special_qualities').value = showCreatureResponse.creature.additional_special_qualities
}

const showCreatureFail = function (error) {
  console.log('showCreatureFail is ', error)
}

const deleteCreatureSuccess = function (deleteCreatureResponse) {
  console.log('deleteCreatureResponse is ', deleteCreatureResponse)
}

const deleteCreatureFail = function (error) {
  console.log('deleteCreatureFail is ', error)
}

module.exports = {
  signInSuccess: signInSuccess,
  signInError: signInError,
  signUpSuccess: signUpSuccess,
  signUpFail: signUpFail,
  createCreatureSuccess: createCreatureSuccess,
  createCreatureFail: createCreatureFail,
  updateCreatureSuccess: updateCreatureSuccess,
  updateCreatureFail: updateCreatureFail,
  getCreaturesSuccess: getCreaturesSuccess,
  getCreaturesFail: getCreaturesFail,
  showCreatureSuccess: showCreatureSuccess,
  showCreatureFail: showCreatureFail,
  deleteCreatureSuccess: deleteCreatureSuccess,
  deleteCreatureFail: deleteCreatureFail,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFail: changePasswordFail
}
