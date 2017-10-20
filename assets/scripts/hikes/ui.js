'use strict'
const showHikesTemplate = require('../templates/hike-listing.handlebars')

const createHikeSuccess = function (data) {
  console.log('Successfully created hike')
  $('.create-hike-form').hide()
}

const createHikeFailure = function () {
  console.log('Failed to create new hike')
}

const getHikesSuccess = function (data) {
  console.log('Successfully got all hikes')
  console.log(data.hikes)
  const showHikesHtml = showHikesTemplate({ hikes: data.hikes })
  $('.content').append(showHikesHtml)
  $('#get-hikes').hide()
}

// const clearBooks = () => {
//   $('.content').empty()
// }

const getHikesFailure = function () {
  console.log('Failed to get all hikes')
}

module.exports = {
  createHikeSuccess,
  createHikeFailure,
  getHikesSuccess,
  getHikesFailure
}
