'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const hikeEvents = require('./hikes/events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.addHandlers()
  hikeEvents.addHandlers()
  $('#create-hike-form').on('submit', hikeEvents.onCreateHike)
  $('#new-hike-button').on('hidden.bs.modal', function () {
    $(this).find('form')[0].reset()
  })
})

// $('#create-hike-modal').on('hidden.bs.modal', function () {
//   $(this).find('form')[0].reset()
// })

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
