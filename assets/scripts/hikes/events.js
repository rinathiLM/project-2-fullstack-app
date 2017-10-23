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
    // had to do the below so that all of these run before my handlebars since the button functionality relies on the below
    .then(() => $('.update-hike-form').on('submit', onUpdateHike))
    .then(() => $('.delete-hike-button').on('click', onDeleteHike))
    .catch(ui.getHikesFailure)
}

const onDeleteHike = function (event) {
  event.preventDefault()
  console.log('delete hike button clicked')
  // have to get the hike ID that I want to delete
  const hikeId = $(this).data('id')
  console.log(hikeId)
  api.deleteHike(hikeId)
    .then(ui.deleteHikeSuccess(hikeId))
    .catch(ui.deleteHikeFailure)
}

// const onDeleteCity = function (event) {
//   event.preventDefault()
//   const cityId = $(this).data('id')
//   api.deleteCity(cityId)
//     .then(ui.deleteCitySuccess(cityId))
//     .catch(ui.deleteCityFailure)
// }

const onUpdateHike = function (event) {
  event.preventDefault()
  console.log('update modal button clicked')
  const hikeId = $(this).data('id')
  console.log('hike updating is', hikeId)
  const updateHike = getFormFields(this)
  console.log('updated info:', updateHike)
  // api.updateHike(updateHike, hikeId)
  //   .then(ui.updateHikeSuccess(hikeId))
  //   .catch(ui.updateHikeFailure)
}

const onHideHikes = function (event) {
  event.preventDefault()
  $('.content').hide()
  $('#hide-hikes').hide()
  $('#get-hikes').show()
}

const addHandlers = function () {
  $('.create-hike-form').on('submit', onCreateHike)
  $('#get-hikes').on('click', onGetAllHikes)
  $('#hide-hikes').on('click', onHideHikes)
  $('#delete-hike-button').on('click', onDeleteHike)
  $('#update-hike-modal').on('click', onUpdateHike)
}

module.exports = {
  addHandlers
}
