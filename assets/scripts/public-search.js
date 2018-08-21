// const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui.js')
const api = require('./api.js')
const store = require('./store.js')
const events = require('./events.js')

const onClick = function (event) {
  console.log('a click!')
  event.preventDefault()

  api.getPublicCreatures()
    .then(onPublicSearch)
    .catch(ui.getPublicCreaturesFail)
}

const onPublicSearch = function (onClickData) {
  console.log('onClickData is ', onClickData)
  // console.log('The list is ', onClickData.creatures)
  store.publicCreatures = onClickData.public_creatures
  const publicCreaturesArray = onClickData.public_creatures
  // console.log('creaturesArray length is ' + creaturesArray.length)
  const publicCreaturesList = []
  for (let i = 0; i < publicCreaturesArray.length; i++) {
    publicCreaturesList.push(publicCreaturesArray[i].name)
    // console.log(creaturesList)
  }
  store.publicCreaturesList = publicCreaturesList
  function updateResult (query) {
    const resultList = document.querySelector('.result')
    resultList.innerHTML = ''
    publicCreaturesList.map(function (algo) {
      query.split(' ').map(function (word) {
        if (algo.toLowerCase().indexOf(word.toLowerCase()) !== -1) {
          resultList.innerHTML += `<li class="list-group-item">${algo}</li>`
        }
      })
    })
  }
  const publicSearchListener = document.getElementById('public-search-input')
  publicSearchListener.addEventListener('keyup', function (value, callback) {
    updateResult(this.value)
    $('#public-search-results').show()
  })
}
// $('.list-group-item').on('click', onSearchResultClick)
//
const onResultClick = function (event) {
  const chosenMonster = event.target.innerHTML
  // console.log('the value is ' + chosenMonster)
  // console.log('store.creatures is ' + store.creatures)
  // console.log('store.creaturesList is ' + store.creaturesList)
  const publicMonsterIndex = store.publicCreaturesList.indexOf(chosenMonster)
  // console.log('monsterIndex is ' + monsterIndex)
  // console.log('The database index is ' + store.creatures[monsterIndex].id)
  const publicMonsterDatabaseIndex = store.creatures[publicMonsterIndex].id
  store.currentPublicCreatureId = publicMonsterDatabaseIndex
  events.onShowFromSearch(publicMonsterDatabaseIndex)
  // $('.details').hide()
  document.getElementById('public-search-input').value = ''
}

// const onShowDetails = function (event) {
//   event.preventDefault()
//   $('.details').toggle()
// }

const searchElement = document.getElementById('public-result-list')

document.addEventListener('click', function (event) {
  const isClickInside = searchElement.contains(event.target)
  if (isClickInside) {
    // console.log('You clicked inside the search results')
  } else {
    // console.log('You clicked outside the search results')
    $('#public-search-results').hide()
  }
})

module.exports = {
  onClick: onClick,
  onResultClick: onResultClick
  // onShowDetails: onShowDetails
}
