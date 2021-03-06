const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onCreateHike = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.createHike(data)
    .then(ui.createHikeSuccess)
    .then(getHikesUpdate)
    .catch(ui.createHikeFailure)
}

const onGetAllHikes = function (event) {
  event.preventDefault()
  // console.log(event)
  api.getHikes()
    .then(ui.getHikesSuccess)
    // had to do the below so that all of these run before my handlebars since the button functionality relies on the below
    .then(() => $('.update-hike-form').on('submit', onUpdateHike))
    .then(() => $('.delete-hike-link').on('click', onDeleteHike))
    .catch(ui.getHikesFailure)
}

// function to get hikes again once a hike is updated or created
const getHikesUpdate = function (event) {
  api.getHikes()
    .then(ui.getHikesSuccess)
    // had to do the below so that all of these run before my handlebars since the button functionality relies on the below
    .then(() => $('.update-hike-form').on('submit', onUpdateHike))
    .then(() => $('.delete-hike-link').on('click', onDeleteHike))
    .catch(ui.getHikesFailure)
}

const onDeleteHike = function (event) {
  event.preventDefault()
  // console.log('delete hike clicked')
  // have to get the hike ID that I want to delete
  const hikeId = $(event.target).data('id')
  // console.log(hikeId)
  api.deleteHike(hikeId)
    .then(ui.deleteHikeSuccess(hikeId))
    .then(getHikesUpdate)
    .catch(ui.deleteHikeFailure)
}

const onUpdateHike = function (event) {
  event.preventDefault()
  // console.log('update modal button clicked')
  const hikeId = $(event.target).data('id')
  // console.log('hike updating is', hikeId)
  const updateHike = getFormFields(event.target)
  // console.log('updated info:', updateHike)
  api.updateHike(updateHike, hikeId)
    .then(ui.updateHikeSuccess(hikeId))
    .then(getHikesUpdate)
    .catch(ui.updateHikeFailure)
}

const addHandlers = function () {
  $('.create-hike-form').on('submit', onCreateHike)
  $('.get-hikes-button').on('click', onGetAllHikes)
  $('#update-hike-modal').on('click', onUpdateHike)
}

module.exports = {
  addHandlers
}
