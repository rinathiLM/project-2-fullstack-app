'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  // console.log('Sign up button clicked successfully')
  $('#sign-up-modal-label').text('You successfully created an account, close this message and log in!')
  $('.sign-up-modal-body').hide()
  // hiding html elements in home page
  $('.heading').hide()
}

const signUpFailure = function () {
  console.log('Sign up button clicked failure')
  $('#sign-up-modal-label').text('Hmm, something isn\'t right, try again.')
  console.error()
}

const signInSuccess = function (data) {
  store.user = data.user
  // console.log('Signed in successfully')
  // console.log(data)
  // message that user signed in successfully
  $('.user-message').show()
  $('#user-message').text('Welcome! What would you like to do?')
  // hide html elements in home page and dropdown menu
  $('.heading').hide()
  $('.sign-in').hide()
  // show  elements after logged in
  $('.new-hike-button').show()
  $('#get-hikes').show()
  // display navbar links on signin
  $('#change-pwd-dropdown').show()
  $('#sign-out-link').show()
  $('#sign-in-dropdown').hide()
  $('#sign-in-name').val('')
  $('#sign-in-pwd').val('')
}

const signInFailure = function () {
  console.error('Signed in failure')
}

const changePasswordSuccess = function () {
  console.log('Changed password successfully')
  // message that user changed password successfully
  $('#user-message').text('You changed your password successfully. What would you like to do?')
  // hide dropdown menus
  $('.change-pwd').hide()
  $('#old-pwd').val('')
  $('#new-pwd').val('')
}

const changePasswordFailure = function () {
  console.error('Change password failure')
}

const signOutSuccess = function () {
  console.log('Signed out successfully')
  // setting this to null to clear out our user data
  store.user = null
  // hide all the other fields and show home screen again
  $('.new-hike-button').hide()
  $('#get-hikes').hide()
  $('.user-message').hide()
  $('.heading').show()
  $('#content').hide()
  // hide and display navbar links on signout
  $('#change-pwd-dropdown').hide()
  $('#sign-out-link').hide()
  $('#sign-in-dropdown').show()
}

const signOutFailure = function () {
  console.log('Failed to sign out')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
