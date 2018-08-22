// const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui.js')
const api = require('./api.js')
const store = require('./store.js')
const events = require('./events.js')

const onClick = function (event) {
  event.preventDefault()

  api.getCreatures()
    .then(onSearch)
    .catch(ui.getCreaturesFail)
}

const onSearch = function (onClickData) {
  console.log('onClickData is ', onClickData)
  // console.log('The list is ', onClickData.creatures)
  store.creatures = onClickData.creatures
  const creaturesArray = onClickData.creatures
  if (creaturesArray.length === 0) {
    $('#search-notifier').show()
    $('#search-notifier').delay(2000).fadeOut('fast')
    // console.log('Its ZERO!')
  }
  // console.log('creaturesArray length is ' + creaturesArray.length)
  const creaturesList = []
  for (let i = 0; i < creaturesArray.length; i++) {
    creaturesList.push(creaturesArray[i].name)
    console.log(creaturesList)
  }
  store.creaturesList = creaturesList
  function updateResult (query) {
    const resultList = document.querySelector('.result')
    resultList.innerHTML = ''
    creaturesList.map(function (algo) {
      query.split(' ').map(function (word) {
        if (algo.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
          resultList.innerHTML += `<li class="list-group-item">${algo}</li>`
        }
      })
    })
  }
  const searchListener = document.getElementById('search-input')
  searchListener.addEventListener('keyup', function (value, callback) {
    updateResult(this.value)
    $('#search-results').show()
  })
}
// $('.list-group-item').on('click', onSearchResultClick)
//
const onResultClick = function (event) {
  const chosenMonster = event.target.innerHTML
  // console.log('the value is ' + chosenMonster)
  // console.log('store.creatures is ' + store.creatures)
  // console.log('store.creaturesList is ' + store.creaturesList)
  const monsterIndex = store.creaturesList.indexOf(chosenMonster)
  // console.log('monsterIndex is ' + monsterIndex)
  // console.log('The database index is ' + store.creatures[monsterIndex].id)
  const monsterDatabaseIndex = store.creatures[monsterIndex].id
  store.currentCreatureId = monsterDatabaseIndex
  events.onShowFromSearch(monsterDatabaseIndex)
  // $('.details').hide()
  document.getElementById('search-input').value = ''
}

// const onShowDetails = function (event) {
//   event.preventDefault()
//   $('.details').toggle()
// }

const searchElement = document.getElementById('result-list')

document.addEventListener('click', function (event) {
  const isClickInside = searchElement.contains(event.target)
  if (isClickInside) {
    // console.log('You clicked inside the search results')
  } else {
    // console.log('You clicked outside the search results')
    $('#search-results').hide()
  }
})

module.exports = {
  onClick: onClick,
  onResultClick: onResultClick
  // onShowDetails: onShowDetails
}
