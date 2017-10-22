'use strict'
const showHikesTemplate = require('../templates/hike-listing.handlebars')

const createHikeSuccess = (data) => {
  console.log('Successfully created hike ', data)
  $('#create-hike-modal').modal('hide')
  $('#hike-created-message').text('Successfully added hike! Click the "See my hikes" button to see all your entries.')
}

const createHikeFailure = () => {
  console.log('Failed to create new hike')
}

const getHikesSuccess = (data) => {
  console.log('Successfully got all hikes')
  console.log(data.hikes)
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').html(showHikesHtml)
  $('#get-hikes').hide()
}

const getHikesFailure = () => {
  console.log('Failed to get all hikes')
}

const deleteHikeSuccess = () => {
  console.log('Successfully deleted a hike')
  // $('.delete-hike-form').hide()
}

const deleteHikeFailure = () => {
  console.log('Failed to delete hike')
}

const updateHikeSuccess = (data) => {
  console.log('Successful udpate')
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').html(showHikesHtml)
  // $('#update-hike-form').modal('hide')
}

const updateHikeFailure = () => {
  console.log('Failed to update')
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
