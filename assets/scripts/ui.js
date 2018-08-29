'use strict'
const store = require('./store')

const creatureDisplayList = [ 'display-name', 'display-cr', 'display-alignment',
  'display-creature_category', 'display-subcategory', 'display-size',
  'display-initiative', 'display-senses', 'display-perception',
  'display-languages', 'display-skills', 'display-str', 'display-dex',
  'display-con', 'display-int', 'display-wis', 'display-cha', 'display-items',
  'display-appearance', 'display-description', 'display-environment',
  'display-organization', 'display-treasure', 'display-source', 'display-ac',
  'display-dodgeac', 'display-flat_footed', 'display-ac_notes', 'display-cmd',
  'display-saves', 'display-hp', 'display-hd', 'display-dr',
  'display-fast_healing_regen', 'display-immunities', 'display-resistances',
  'display-sr', 'display-weaknesses', 'display-defensive_abilities',
  'display-speed', 'display-speed_note', 'display-melee', 'display-ranged',
  'display-cmb', 'display-reach', 'display-offense_note',
  'display-special_abilities', 'display-spell_like_abilities',
  'display-spells_known', 'display-spells_prepared', 'display-feats',
  'display-additional_special_qualities' ]

const emptyArrayList = [ '', 'CR:', ',', ',', ',', 'Size: ',
  'Initiative: +null', 'Senses: ', 'Perception: ,', 'Languages: ', 'Skills: ',
  'Str: ,', 'Dex: ,', 'Con: ,', 'Int: ,', 'Wis: ,', 'Cha: ', 'Items: ', 'Appearance: ',
  'Description: ', 'Environment: ', 'Organization: ', 'Treasure: ', 'Source: null',
  'AC: ,', 'Touch: null', 'Flat-Footed: null', 'Notes: ', 'CMD: ', 'Saves: ',
  'HP: null', 'HD: ', 'DR: ', 'Healing Abilities: ', 'Immunities: ', 'Resistances: ',
  'SR: null', 'Weaknesses: ', 'Defensive Abilities: ', 'Speed: ', 'Speed Note: null',
  'Melee: ', 'Ranged: ', 'CMB: ', 'Reach: ', 'Offense Note: ', 'Special Abilities: ',
  '', 'Spells Known: ', 'Spells Prepared: ', 'Feats: ',
  'Additional Special Qualities: ' ]

const signInSuccess = function (signInResponse) {
  // console.log('signInResponse is', signInResponse)
  store.user = signInResponse.user
  $('#sign-in-form').hide()
  $('#show-sign-in').hide()
  $('#show-sign-in-back').hide()
  $('#sign-up-form').hide()
  $('#show-sign-up').hide()
  $('#show-sign-up-back').hide()
  $('#show-change-password').show()
  $('#sign-out-button').show()
  $('#auth-notifier').text('You are signed in!')
  $('#auth-notifier').show()
  $('#auth-notifier').delay(4000).fadeOut('fast')
  $('#search').show()
  $('#go-to-lab').show()
  $('#viewer-instructions-wrapper').show()
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
}

const signInError = function () {
  // console.log('Error is ', error)
  $('#auth-notifier').text('Please check username and password.')
  $('#auth-notifier').show()
  $('#auth-notifier').delay(4000).fadeOut('fast')
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
}

const signUpSuccess = function (signUpResponse) {
  // console.log('signUpResponse is ', signUpResponse)
  $('#auth-notifier').text('You are signed up! Please sign in.')
  $('#auth-notifier').show()
  $('#auth-notifier').delay(4000).fadeOut('fast')
  $('#sign-up-form').hide()
  $('#show-sign-up-back').hide()
  $('#show-sign-in').show()
  $('#show-sign-up').show()
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
}

const signUpFail = function (error) {
  // console.log('signUpFail is ', error)
  $('#auth-notifier').show()
  if (error.responseText === '{"email":["has already been taken"]}') {
    document.getElementById('auth-notifier').innerHTML = ('This email has been taken.')
  } else {
    document.getElementById('auth-notifier').innerHTML = ('Please check email and password values.')
  }
  $('#auth-notifier').delay(4000).fadeOut('fast')
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
}

const changePasswordSuccess = function (changePasswordResponse) {
  // console.log('changePasswordResponse is ', changePasswordResponse)
  $('#auth-notifier').text('Your password has been changed.')
  $('#auth-notifier').show()
  $('#auth-notifier').delay(4000).fadeOut('fast')
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
}

const changePasswordFail = function () {
  // console.log('changePasswordFail is ', error)
  $('#auth-notifier').text('Check password inputs.')
  $('#auth-notifier').show()
  $('#auth-notifier').delay(4000).fadeOut('fast')
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
}

const signOutSuccess = function (signOutResponse) {
  // console.log('signOutSuccess is ', signOutResponse)
  $('#sign-out-button').hide()
  $('#show-change-password').hide()
  $('#show-sign-in').show()
  $('#show-sign-up').show()
  $('#search').hide()
  document.getElementById('update-id').innerHTML = 'Creature ID:'
  $('#auth-notifier').text('You have signed out.')
  $('#auth-notifier').show()
  $('#auth-notifier').delay(4000).fadeOut('fast')
  $('.display-creature').hide()
  $('#update-lab').hide()
  $('#delete-creature-form').hide()
  $('#go-to-lab').hide()
  $('#go-to-viewer').hide()
  $('#go-to-viewer-no-creature').hide()
  $('#go-to-viewer-wrapper').hide()
  $('#viewer-instructions-wrapper').hide()
  $('#instructions-modal').hide()
  $('#viewer-instructions-modal').hide()
  $('#create-lab').hide()
  $('#lab-instructions-wrapper').hide()
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
  document.getElementById('update-creature-form').reset()
  document.getElementById('create-creature-form').reset()
}

const signOutFail = function () {
  // console.log('signOutFail is ', error)
  $('#auth-notifier').text('Somehow you failed to sign out.')
  $('#auth-notifier').show()
  $('#auth-notifier').delay(4000).fadeOut('fast')
  document.getElementById('sign-in-form').reset()
  document.getElementById('sign-up-form').reset()
  document.getElementById('change-password-form').reset()
}

const createCreatureSuccess = function (createCreatureResponse) {
  // console.log('createCreatureResponse is ', createCreatureResponse)
  store.currentCreatureId = createCreatureResponse.creature.id
  $('#update-id').text('Creature ID: ' + store.currentCreatureId)
  // console.log('createCreatureResponse.creature.name is ' + createCreatureResponse.creature.name)
  document.getElementById('update-creature-form').reset()
  document.getElementById('update-name').value = createCreatureResponse.creature.name
  $('#create-new-creature-notifier').text('Creature created!')
  $('#create-new-creature-notifier').show()
  $('#create-new-creature-notifier').delay(1000).fadeOut('fast')
  $('#update-lab').show()
  $('#delete-creature-form').show()
  $('#go-to-viewer').show()
  $('#go-to-viewer-no-creature').hide()
  document.getElementById('lab-instructions-wrapper').setAttribute('style', 'float: left')
  document.getElementById('create-creature-form').reset()
}

const createCreatureFail = function () {
  // console.log('createCreatureError is ', error)
  $('#create-new-creature-notifier').text('Create creature failed.')
  $('#create-new-creature-notifier').show()
  $('#create-new-creature-notifier').delay(3000).fadeOut('fast')
}

const updateCreatureSuccess = function (updateCreatureResponse) {
  // console.log('updateCreatureResponse is ', updateCreatureResponse)
  store.currentCreatureId = updateCreatureResponse.creature.id
  // console.log('store.currentCreatureId is ' + store.currentCreatureId)
  $('#update-creature-notifier').text('Creature saved!')
  $('#update-creature-notifier-2').text('Creature saved!')
  $('#update-creature-notifier').show()
  $('#update-creature-notifier').delay(1000).fadeOut('fast')
  $('#update-creature-notifier-2').show()
  $('#update-creature-notifier-2').delay(1000).fadeOut('fast')
  document.getElementById('update-id').innerHTML = 'Creature ID:'
}

const updateCreatureFail = function () {
  // console.log('updateCreatureError is ', error)
  document.getElementById('update-id').innerHTML = 'Creature ID:'
  $('#update-creature-notifier').text('Save creature failed. Please create or select a creature.')
  $('#update-creature-notifier-2').text('Save creature failed. Please create or select a creature.')
  $('#update-creature-notifier').show()
  $('#update-creature-notifier').delay(2500).fadeOut('fast')
  $('#update-creature-notifier-2').show()
  $('#update-creature-notifier-2').delay(2500).fadeOut('fast')
  document.getElementById('update-creature-form').reset()
}

const getCreaturesSuccess = function (getCreaturesResponse) {
  // console.log('getCreaturesResponse is ', getCreaturesResponse)
}

const getCreaturesFail = function () {
  // console.log('getCreaturesFail is ', error)
}

const showCreatureSuccess = function (showCreatureResponse) {
  // console.log('showCreatureResponse is ', showCreatureResponse)
  if (store.viewState === 0) {
    $('.display-creature').show()
  }
  if (store.viewState === 1) {
    $('#update-lab').show()
    $('#delete-creature-form').show()
    $('#go-to-viewer').show()
    $('#go-to-viewer-no-creature').hide()
    $('#go-to-viewer-wrapper').show()
    document.getElementById('lab-instructions-wrapper').setAttribute('style', 'float: left')
  }
  store.currentCreatureId = showCreatureResponse.creature.id
  $('#display-name').text(showCreatureResponse.creature.name)
  $('#display-cr').text('CR: ' + showCreatureResponse.creature.cr)
  $('#display-alignment').text(showCreatureResponse.creature.alignment + ',')
  if (!showCreatureResponse.creature.subcategory) {
    $('#display-creature_category').text(showCreatureResponse.creature.creature_category + ',')
    $('#display-subcategory').text('')
  } else {
    $('#display-creature_category').text(showCreatureResponse.creature.creature_category)
    $('#display-subcategory').text(showCreatureResponse.creature.subcategory + ',')
  }
  $('#display-size').text(showCreatureResponse.creature.size)
  $('#display-initiative').text('Initiative: +' + showCreatureResponse.creature.initiative)
  $('#display-senses').text('Senses: ' + showCreatureResponse.creature.senses)
  $('#display-perception').text('Perception: ' + showCreatureResponse.creature.perception + ',')
  $('#display-languages').text('Languages: ' + showCreatureResponse.creature.languages)
  $('#display-skills').text('Skills: ' + showCreatureResponse.creature.skills)
  $('#display-str').text('Str: ' + showCreatureResponse.creature.str + ',')
  $('#display-dex').text('Dex: ' + showCreatureResponse.creature.dex + ',')
  $('#display-con').text('Con: ' + showCreatureResponse.creature.con + ',')
  $('#display-int').text('Int: ' + showCreatureResponse.creature.int + ',')
  $('#display-wis').text('Wis: ' + showCreatureResponse.creature.wis + ',')
  $('#display-cha').text('Cha: ' + showCreatureResponse.creature.cha)
  $('#display-items').text('Items: ' + showCreatureResponse.creature.items)
  $('#display-appearance').text('Appearance: ' + showCreatureResponse.creature.appearance)
  $('#display-description').text('Description: ' + showCreatureResponse.creature.description)
  $('#display-environment').text('Environment: ' + showCreatureResponse.creature.environment)
  $('#display-organization').text('Organization: ' + showCreatureResponse.creature.organization)
  $('#display-treasure').text('Treasure: ' + showCreatureResponse.creature.treasure)
  $('#display-source').text('Source: ' + showCreatureResponse.creature.source)
  $('#display-ac').text('AC: ' + showCreatureResponse.creature.ac + ',')
  $('#display-dodgeac').text('Touch: ' + showCreatureResponse.creature.dodgeac + ',')
  $('#display-flat_footed').text('Flat-Footed: ' + showCreatureResponse.creature.flat_footed)
  $('#display-ac_notes').text('Notes: ' + showCreatureResponse.creature.ac_notes)
  $('#display-cmd').text('CMD: ' + showCreatureResponse.creature.cmd)
  $('#display-saves').text('Saves: ' + showCreatureResponse.creature.saves)
  $('#display-hp').text('HP: ' + showCreatureResponse.creature.hp + ',')
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
  $('#display-spell_like_abilities').text(showCreatureResponse.creature.spell_like_abilities)
  $('#display-spells_known').text('Spells Known: ' + showCreatureResponse.creature.spells_known)
  $('#display-spells_prepared').text('Spells Prepared: ' + showCreatureResponse.creature.spells_prepared)
  $('#display-feats').text('Feats: ' + showCreatureResponse.creature.feats)
  $('#display-additional_special_qualities').text('Additional Special Qualities: ' + showCreatureResponse.creature.additional_special_qualities)
  for (let i = 0; i < creatureDisplayList.length; i++) {
    // console.log(creatureDisplayList[i])
    // console.log(document.getElementById(creatureDisplayList[i]).innerHTML)
    // console.log('#' + creatureDisplayList[i])
    if (document.getElementById(creatureDisplayList[i]).innerHTML.includes('null')) {
      $('#' + creatureDisplayList[i]).hide()
    } else if (document.getElementById(creatureDisplayList[i]).innerHTML === emptyArrayList[i]) {
      $('#' + creatureDisplayList[i]).hide()
    } else {
      $('#' + creatureDisplayList[i]).show()
    }
  }
  // console.log('display appearance is' + document.getElementById('display-appearance').innerHTML)
  if ((document.getElementById('display-appearance').innerHTML.includes('null')) &&
    (document.getElementById('display-description').innerHTML.includes('null')) &&
    (document.getElementById('display-environment').innerHTML.includes('null')) &&
    (document.getElementById('display-organization').innerHTML.includes('null')) &&
    (document.getElementById('display-treasure').innerHTML.includes('null'))) {
    $('#show-details-div').hide()
  } else if ((document.getElementById('display-appearance').innerHTML === 'Appearance: ') &&
    (document.getElementById('display-description').innerHTML === 'Description: ') &&
    (document.getElementById('display-environment').innerHTML === 'Environment: ') &&
    (document.getElementById('display-organization').innerHTML === 'Organization: ') &&
    (document.getElementById('display-treasure').innerHTML === 'Treasure: ')) {
    $('#show-details-div').hide()
  } else {
    $('#show-details-div').show()
  }
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

const showCreatureFail = function () {
  // console.log('showCreatureFail is ', error)
  $('.display-creature').hide()
}

const showPublicCreatureSuccess = function (showPublicCreatureResponse) {
  // console.log('showPublicCreatureResponse is ', showPublicCreatureResponse)
  for (const key of Object.keys(showPublicCreatureResponse.public_creature)) {
    // console.log('the thing is ', key, showPublicCreatureResponse.public_creature[key])
    // console.log('the typeof is ', typeof showPublicCreatureResponse.public_creature[key])
    if (typeof showPublicCreatureResponse.public_creature[key] === 'string') {
      // console.log('its a string!')
      showPublicCreatureResponse.public_creature[key] = showPublicCreatureResponse.public_creature[key].replace(/~/g, ',')
    }
    // console.log('the thing is ', key, showPublicCreatureResponse.public_creature[key])
  }
  if (store.viewState === 0) {
    $('.display-creature').show()
  }
  if (store.user && store.viewState === 1) {
    store.viewState = 0
    $('#update-lab').hide()
    $('#create-lab').hide()
    $('.display-creature').show()
    $('#go-to-lab').show()
    $('#go-to-viewer').hide()
    $('#go-to-viewer-no-creature').hide()
    $('#delete-creature-form').hide()
    $('#lab-instructions-wrapper').hide()
    $('#viewer-instructions-wrapper').show()
    $('#instructions-modal').hide()
    $('#viewer-instructions-modal').hide()
  }
  store.currentPublicCreatureId = showPublicCreatureResponse.public_creature.id
  $('#display-name').text(showPublicCreatureResponse.public_creature.name)
  $('#display-cr').text('CR: ' + showPublicCreatureResponse.public_creature.cr)
  $('#display-alignment').text(showPublicCreatureResponse.public_creature.alignment + ',')
  if (!showPublicCreatureResponse.public_creature.subcategory) {
    $('#display-creature_category').text(showPublicCreatureResponse.public_creature.creature_category + ',')
    $('#display-subcategory').text('')
  } else {
    $('#display-creature_category').text(showPublicCreatureResponse.public_creature.creature_category)
    $('#display-subcategory').text(showPublicCreatureResponse.public_creature.subcategory + ',')
  }
  $('#display-size').text(showPublicCreatureResponse.public_creature.size)
  $('#display-initiative').text('Initiative: +' + showPublicCreatureResponse.public_creature.initiative)
  $('#display-senses').text('Senses: ' + showPublicCreatureResponse.public_creature.senses)
  $('#display-perception').text('Perception: ' + showPublicCreatureResponse.public_creature.perception + ',')
  $('#display-languages').text('Languages: ' + showPublicCreatureResponse.public_creature.languages)
  $('#display-skills').text('Skills: ' + showPublicCreatureResponse.public_creature.skills)
  if (showPublicCreatureResponse.public_creature.str >= 0) {
    $('#display-str').text('Str: ' + '+' + showPublicCreatureResponse.public_creature.str + ',')
  } else {
    $('#display-str').text('Str: ' + showPublicCreatureResponse.public_creature.str + ',')
  }
  if (showPublicCreatureResponse.public_creature.dex >= 0) {
    $('#display-dex').text('Dex: ' + '+' + showPublicCreatureResponse.public_creature.dex + ',')
  } else {
    $('#display-dex').text('Dex: ' + showPublicCreatureResponse.public_creature.dex + ',')
  }
  if (showPublicCreatureResponse.public_creature.con >= 0) {
    $('#display-con').text('Con: ' + '+' + showPublicCreatureResponse.public_creature.con + ',')
  } else {
    $('#display-con').text('Con: ' + showPublicCreatureResponse.public_creature.con + ',')
  }
  if (showPublicCreatureResponse.public_creature.int >= 0) {
    $('#display-int').text('Int: ' + '+' + showPublicCreatureResponse.public_creature.int + ',')
  } else {
    $('#display-int').text('Int: ' + showPublicCreatureResponse.public_creature.int + ',')
  }
  if (showPublicCreatureResponse.public_creature.wis >= 0) {
    $('#display-wis').text('Wis: ' + '+' + showPublicCreatureResponse.public_creature.wis + ',')
  } else {
    $('#display-wis').text('Wis: ' + showPublicCreatureResponse.public_creature.wis + ',')
  }
  if (showPublicCreatureResponse.public_creature.cha >= 0) {
    $('#display-cha').text('Cha: ' + '+' + showPublicCreatureResponse.public_creature.cha)
  } else {
    $('#display-cha').text('Cha: ' + showPublicCreatureResponse.public_creature.cha)
  }
  $('#display-items').text('Items: ' + showPublicCreatureResponse.public_creature.items)
  $('#display-appearance').text('Appearance: ' + showPublicCreatureResponse.public_creature.appearance)
  $('#display-description').text('Description: ' + showPublicCreatureResponse.public_creature.description)
  $('#display-environment').text('Environment: ' + showPublicCreatureResponse.public_creature.environment)
  $('#display-organization').text('Organization: ' + showPublicCreatureResponse.public_creature.organization)
  $('#display-treasure').text('Treasure: ' + showPublicCreatureResponse.public_creature.treasure)
  $('#display-source').text('Source: ' + showPublicCreatureResponse.public_creature.source)
  $('#display-ac').text('AC: ' + showPublicCreatureResponse.public_creature.ac + ',')
  $('#display-dodgeac').text('Touch: ' + showPublicCreatureResponse.public_creature.dodgeac + ',')
  $('#display-flat_footed').text('Flat-Footed: ' + showPublicCreatureResponse.public_creature.flat_footed + ',')
  $('#display-ac_notes').text('Notes: ' + showPublicCreatureResponse.public_creature.ac_notes)
  $('#display-cmd').text('CMD: ' + showPublicCreatureResponse.public_creature.cmd)
  $('#display-saves').text('Saves: ' + showPublicCreatureResponse.public_creature.saves)
  $('#display-hp').text('HP: ' + showPublicCreatureResponse.public_creature.hp + ',')
  $('#display-hd').text('HD: ' + showPublicCreatureResponse.public_creature.hd)
  $('#display-dr').text('DR: ' + showPublicCreatureResponse.public_creature.dr)
  $('#display-fast_healing_regen').text('Healing Abilities: ' + showPublicCreatureResponse.public_creature.fast_healing_regen)
  $('#display-immunities').text('Immunities: ' + showPublicCreatureResponse.public_creature.immunities)
  $('#display-resistances').text('Resistances: ' + showPublicCreatureResponse.public_creature.resistances)
  $('#display-sr').text('SR: ' + showPublicCreatureResponse.public_creature.sr)
  $('#display-weaknesses').text('Weaknesses: ' + showPublicCreatureResponse.public_creature.weaknesses)
  $('#display-defensive_abilities').text('Defensive Abilities: ' + showPublicCreatureResponse.public_creature.defensive_abilities)
  $('#display-speed').text('Speed: ' + showPublicCreatureResponse.public_creature.speed)
  $('#display-speed_note').text('Speed Note: ' + showPublicCreatureResponse.public_creature.speed_note)
  $('#display-melee').text('Melee: ' + showPublicCreatureResponse.public_creature.melee)
  $('#display-ranged').text('Ranged: ' + showPublicCreatureResponse.public_creature.ranged)
  $('#display-cmb').text('CMB: ' + showPublicCreatureResponse.public_creature.cmb)
  $('#display-reach').text('Reach: ' + showPublicCreatureResponse.public_creature.reach)
  $('#display-offense_note').text('Offense Note: ' + showPublicCreatureResponse.public_creature.offense_note)
  $('#display-special_abilities').text('Special Abilities: ' + showPublicCreatureResponse.public_creature.special_abilities)
  $('#display-spell_like_abilities').text(showPublicCreatureResponse.public_creature.spell_like_abilities)
  $('#display-spells_known').text('Spells Known: ' + showPublicCreatureResponse.public_creature.spells_known)
  $('#display-spells_prepared').text('Spells Prepared: ' + showPublicCreatureResponse.public_creature.spells_prepared)
  $('#display-feats').text('Feats: ' + showPublicCreatureResponse.public_creature.feats)
  $('#display-additional_special_qualities').text('Additional Special Qualities: ' + showPublicCreatureResponse.public_creature.additional_special_qualities)
  $('#show-details-div').show()
  for (let i = 0; i < creatureDisplayList.length; i++) {
    // console.log(creatureDisplayList[i])
    // console.log(document.getElementById(creatureDisplayList[i]).innerHTML)
    // console.log('#' + creatureDisplayList[i])
    if (document.getElementById(creatureDisplayList[i]).innerHTML.includes('null')) {
      $('#' + creatureDisplayList[i]).hide()
    } else if (document.getElementById(creatureDisplayList[i]).innerHTML === emptyArrayList[i]) {
      $('#' + creatureDisplayList[i]).hide()
    } else {
      $('#' + creatureDisplayList[i]).show()
    }
  }
}

const showPublicCreatureFail = function () {
  // console.log('showCreatureFail is ', error)
  $('.display-creature').hide()
}

const deleteCreatureSuccess = function (deleteCreatureResponse) {
  // console.log('deleteCreatureResponse is ', deleteCreatureResponse)
  $('#delete-creature-notifier').text('Creature deleted!')
  document.getElementById('update-id').innerHTML = 'Creature ID:'
  $('#delete-creature-notifier').show()
  $('#delete-creature-notifier').delay(2000).fadeOut('fast')
  document.getElementById('update-creature-form').reset()
  document.getElementById('create-creature-form').reset()
  store.currentCreatureId = null
  $('#update-lab').hide()
  $('#go-to-viewer-no-creature').show()
  $('#go-to-viewer').hide()
  $('#delete-creature-form').hide()
}

const deleteCreatureFail = function () {
  // console.log('deleteCreatureFail is ', error)
  $('#delete-creature-notifier').text('Failed to delete creature. It was probably already deleted.')
  $('#delete-creature-notifier').show()
  $('#delete-creature-notifier').delay(3000).fadeOut('fast')
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
  showPublicCreatureSuccess: showPublicCreatureSuccess,
  showPublicCreatureFail: showPublicCreatureFail,
  deleteCreatureSuccess: deleteCreatureSuccess,
  deleteCreatureFail: deleteCreatureFail,
  changePasswordSuccess: changePasswordSuccess,
  changePasswordFail: changePasswordFail,
  signOutSuccess: signOutSuccess,
  signOutFail: signOutFail
}
