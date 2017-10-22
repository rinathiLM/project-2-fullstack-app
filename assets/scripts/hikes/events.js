const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateHike = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.createHike(data)
    .then(ui.createHikeSuccess)
    .catch(ui.createHikeFailure)
}

const onGetAllHikes = function (event) {
  event.preventDefault()
  api.getHikes()
    .then(ui.getHikesSuccess)
    // had to this so that my hike update handlebars would be re-initiated after getting all hikes
    .then(() => $('#update-hike-form').on('submit', onUpdateHike))
    .then(() => $('#delete-hike-button').on('submit', onDeleteHike))
    .catch(ui.getHikesFailure)
}

const onDeleteHike = function (event) {
  event.preventDefault()
  console.log('delete hike button clicked')
  // have to get the hike ID that I want to delete
  const hikeId = $(this).data('id')
  // const hikeId = getFormFields(this).hike.id
  console.log(hikeId)
  api.deleteHike(hikeId)
    .then(ui.deleteHikeSuccess(hikeId))
    .catch(ui.deleteHikeFailure)
}

const onUpdateHike = function (event) {
  event.preventDefault()
  const hikeId = $(this).data('id')
  console.log('hike is ', hikeId)
  const updateHike = getFormFields(this)
  console.log('updated info:', updateHike)
  api.updateHike(updateHike, hikeId)
    .then(ui.updateHikeSuccess(hikeId))
    .catch(ui.updateHikeFailure)
}

const addHandlers = function () {
  $('.create-hike-form').on('submit', onCreateHike)
  $('#get-hikes').on('click', onGetAllHikes)
}

module.exports = {
  addHandlers
}
