const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateHike = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.createHike(data)
    .then(ui.createHikeSuccess)
    .catch(ui.createHikeFailure)
}

const onGetAllHikes = function (event) {
  event.preventDefault()
  api.getHikes()
    .then(ui.getHikesSuccess)
    .catch(ui.getHikesFailure)
}
const addHandlers = function () {
  // jquery code here
  $('.create-hike-form').on('submit', onCreateHike)
  $('#get-hikes').on('click', onGetAllHikes)
}

module.exports = {
  addHandlers
}
