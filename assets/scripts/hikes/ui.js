'use strict'
const showHikesTemplate = require('../templates/hike-listing.handlebars')

const createHikeSuccess = (data) => {
  console.log('Successfully created hike')
  // $('.create-hike-form').hide()
}

const createHikeFailure = () => {
  console.log('Failed to create new hike')
}

const getHikesSuccess = (data) => {
  console.log('Successfully got all hikes')
  console.log(data.hikes)
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').html(showHikesHtml)
  // $('#get-hikes').hide()
}

const deleteHikeSuccess = () => {
  console.log('Successfully deleted a hike')
  // $('.delete-hike-form').hide()
}

// const clearBooks = () => {
//   $('.content').empty()
// }

const deleteHikeFailure = () => {
  console.log('Failed to delete hike')
}

const getHikesFailure = () => {
  console.log('Failed to get all hikes')
}

module.exports = {
  createHikeSuccess,
  createHikeFailure,
  getHikesSuccess,
  getHikesFailure,
  deleteHikeSuccess,
  deleteHikeFailure
}
