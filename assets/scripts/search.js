// const getFormFields = require('../../lib/get-form-fields')
const ui = require('./ui.js')
const api = require('./api.js')
// const store = require('./store.js')

const onClick = function (event) {
  event.preventDefault()

  api.getCreatures()
    .then(onSearch)
    .catch(ui.getCreaturesFail)
}

const onSearch = function (onClickData) {
  console.log('onClickData is ', onClickData)
  console.log('The list is ', onClickData.creatures)
  const creaturesArray = onClickData.creatures
  const creaturesList = []
  for (let i = 0; i < creaturesArray.length; i++) {
    creaturesList.push(creaturesArray[i].name)
    console.log(creaturesList)
  }
  function updateResult (query) {
    let resultList = document.querySelector('.result')
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
  })
}
// $('.list-group-item').on('click', onSearchResultClick)
//
const onResultClick = function (event) {
  const chosenMonster = event.target.innerHTML
  console.log('the value is ' + chosenMonster)
  let a = api.getCreatures()
  console.log('a is ' + a.creatures)
  // const creaturesArray = onClickData.creatures
  // creaturesList.indexOf(event.target.innerHTML)
}

module.exports = {
  onClick: onClick,
  onResultClick: onResultClick
}
