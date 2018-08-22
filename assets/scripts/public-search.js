// const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui.js')
const api = require('./api.js')
const store = require('./store.js')
const events = require('./events.js')

document.addEventListener('DOMContentLoaded', function () {
  onLoad()
})

let publicCreatures = []
const publicCreaturesList = []
let publicCreaturesString = ''

const onLoad = function (event) {
  api.getPublicCreatures()
    .then((response) => {
      publicCreatures = response.public_creatures
      // console.log('publicCreatures is ', publicCreatures)
      for (let i = 0; i < publicCreatures.length; i++) {
        publicCreaturesList.push(publicCreatures[i].name)
      }
      // console.log('publicCreaturesList is ', publicCreaturesList)
      publicCreaturesString = publicCreaturesList.join('"')
      // console.log('publicCreaturesString is ', publicCreaturesString)
    })
    .catch(ui.getPublicCreaturesFail)
}

$('#public-search-input').keyup(function () {
  const search = $(this).val()
  const resultsText = $('#results_text')
  const resultsCount = $('#results_count')
  const resultList = document.querySelector('#public-result-list')
  resultList.innerHTML = ''
  if (!search) {
    resultsText.val('')
    resultsCount.val('0')
    return
  }
  const rx = new RegExp('"([^"]*' + search + '[^"]*)"', 'gi')
  let i = 0
  let results = ''
  let result
  // console.log('rx is ', rx)
  while (result = rx.exec(publicCreaturesString)) {
    // console.log('result is ', result)
    // console.log('results before the \n stuff is ', results)
    results += '\n' + result
    i += 1
    if (i >= 100) {
      break
    }
  }
  console.log('results is ', results)
  const resultsArray = results.split('\n')
  console.log('resultsArray is ', resultsArray)
  for (let i = 0; i < resultsArray.length; i++) {
    const newResult = resultsArray[i].split(',')
    resultsArray[i] = newResult[1]
  }
  console.log('revised resultsArray is ', resultsArray)
  for (let i = 0; i < resultsArray.length; i++) {
    resultList.innerHTML += `<li class="list-group-item">${resultsArray[i]}</li>`
  }
  $('#public-search-results').show()
  // resultList.innerHTML += `<li class="list-group-item">${resultsArray}</li>`
  resultsText.val(results)
  resultsCount.val(i)
})

const onResultClick = function (event) {
  const chosenMonster = event.target.innerHTML
  console.log('the value is ' + chosenMonster)
  // console.log('store.creatures is ' + store.creatures)
  // console.log('store.creaturesList is ' + store.creaturesList)
  const publicMonsterIndex = publicCreaturesList.indexOf(chosenMonster)
  // console.log('monsterIndex is ' + monsterIndex)
  // console.log('The database index is ' + store.creatures[publicMonsterIndex].id)
  const publicMonsterDatabaseIndex = publicCreatures[publicMonsterIndex].id
  store.currentPublicCreatureId = publicMonsterDatabaseIndex
  console.log('store.currentPublicCreatureId is ', store.currentPublicCreatureId)
  events.onShowFromPublicSearch(publicMonsterDatabaseIndex)
  // $('.details').hide()
  document.getElementById('public-search-input').value = ''
}

// const onPublicSearch = function () {
  // function updateResult (query) {
  //   const resultList = document.querySelector('#public-result-list')
  //   resultList.innerHTML = ''
  //   console.log('publicCreaturesList is ', publicCreaturesList)
    // publicCreaturesList.map(function (algo) {
    //   query.split(' ').map(function (word) {
    //     if (algo.toLowerCase().indexOf(word.toLowerCase()) !== '') {
    //       resultList.innerHTML += `<li class="list-group-item">${algo}</li>`
    //     }
    //   })
    // })
//   }
//   const publicSearchListener = document.getElementById('public-search-input')
//   publicSearchListener.addEventListener('keyup', function (value, callback) {
//     updateResult(this.value)
//     $('#public-search-results').show()
//   })
// }
// $('.list-group-item').on('click', onSearchResultClick)

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
  onResultClick: onResultClick
  // onPublicSearch: onPublicSearch
  // onShowDetails: onShowDetails
}
