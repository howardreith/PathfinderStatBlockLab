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

const showCreatureSuccess = function (showCreatureResponse) {
  console.log('showCreatureResponse is ', showCreatureResponse)
  $('#display-name').text('Name: ' + showCreatureResponse.creature.name)
  $('#display-cr').text('CR: ' + showCreatureResponse.creature.cr)
  $('#display-alignment').text('Alignment: ' + showCreatureResponse.creature.alignment)
  $('#display-creature_category').text('Type: ' + showCreatureResponse.creature.creature_category)
  $('#display-subtype').text('Subtype: ' + showCreatureResponse.creature.subtype)
  $('#display-size').text('Size: ' + showCreatureResponse.creature.size)
  $('#display-initiative').text('Initiative: ' + showCreatureResponse.creature.initiative)
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
  createCreatureSuccess: createCreatureSuccess,
  createCreatureFail: createCreatureFail,
  updateCreatureSuccess: updateCreatureSuccess,
  updateCreatureFail: updateCreatureFail,
  getCreaturesSuccess: getCreaturesSuccess,
  getCreaturesFail: getCreaturesFail,
  showCreatureSuccess: showCreatureSuccess,
  showCreatureFail: showCreatureFail,
  deleteCreatureSuccess: deleteCreatureSuccess,
  deleteCreatureFail: deleteCreatureFail
}
