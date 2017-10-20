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

const onDeleteHike = function (event) {
  event.preventDefault()
  // have to get the hike ID that I want to delete
  const hikeId = getFormFields(this).hike.id
  api.deleteHike(hikeId)
    .then(ui.deleteHikeSuccess)
    .catch(ui.deleteHikeFailure)
}

const openModal = function (event) {
  event.preventDefault()
  $('#update-hike-modal').modal('show')
}

const addHandlers = function () {
  // jquery code here
  $('.create-hike-form').on('submit', onCreateHike)
  $('#get-hikes').on('click', onGetAllHikes)
  $('.delete-hike-form').on('submit', onDeleteHike)
  $('#update-hike-button').on('click', openModal)
}

module.exports = {
  addHandlers
}
