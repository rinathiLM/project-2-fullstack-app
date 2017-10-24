'use strict'
const showHikesTemplate = require('../templates/hike-listing.handlebars')
const api = require('./api')
const ui = require('./ui')
const events = require('./events')

const createHikeSuccess = (data) => {
  console.log('Successfully created hike ', data)
  $('.create-hike-modal-title').text('Yay, you just inputted a new adventure! Close this message to see your recent input.')
  $('.create-hike-modal-body').hide()
  // $('#create-hike-modal').modal('hide')
  // $('#create-hike-modal').empty()
}

const createHikeFailure = () => {
  console.log('Failed to create new hike')
  $('.create-hike-modal-title').text('Something is wrong, please close this box and try again.')
  $('.create-hike-modal-body').hide()
}

const getHikesSuccess = (data) => {
  console.log('Successfully got all hikes')
  console.log(data.hikes)
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').html(showHikesHtml)
  // $('#get-hikes').hide()
  // $('#hide-hikes').show()
}

const getHikesFailure = () => {
  console.log('Failed to get all hikes')
}

const deleteHikeSuccess = (id) => {
  console.log('Successfully deleted a hike')
  $("div[data-id='" + id + "']").remove()
  // show message that you succssfully deleted name of hike
}

const deleteHikeFailure = () => {
  console.log('Failed to delete hike')
}

const updateHikeSuccess = (data) => {
  console.log('Successful update')
  $('.update-hike-modal-title').text('You successfully updated your hike! Close this message to see your change(s).')
  $('.update-modal-body').hide()
  // add this to UI to see if it adds it autmatoically
  api.getHikes()
    .then(ui.getHikesSuccess)
    // had to do the below so that all of these run before my handlebars since the button functionality relies on the below
    .then(() => $('.update-hike-form').on('submit', events.onUpdateHike))
    .then(() => $('.delete-hike-link').on('click', events.onDeleteHike))
    .catch(ui.getHikesFailure)
  // $('.update-hike-modal-title').text('Your inputs have been updated!')
  // $('.update-modal-body').hide()
}

const updateHikeFailure = () => {
  console.log('Failed to update')
  $('.update-hike-modal-title').text('Something is wrong, please close this box and try again.')
  $('.update-modal-body').hide()
}

module.exports = {
  createHikeSuccess,
  createHikeFailure,
  getHikesSuccess,
  getHikesFailure,
  deleteHikeSuccess,
  deleteHikeFailure,
  updateHikeSuccess,
  updateHikeFailure
}
