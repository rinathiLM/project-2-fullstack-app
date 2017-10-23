'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  // console.log('Sign up button clicked successfully')
  $('#sign-up-modal-label').text('You successfully created an account, close this box and log in!')
  $('.sign-up-modal-body').hide()
  // hiding html elements in home page
  $('.heading').hide()
}

const signUpFailure = function () {
  console.log('Sign up button clicked failure')
  console.error()
}

const signInSuccess = function (data) {
  store.user = data.user
  // console.log('Signed in successfully')
  // console.log(data)
  // hiding html elements in home page
  $('.heading').hide()
  // show  elements after logged in
  $('.new-hike-button').show()
  $('.get-hikes').show()
}

const signInFailure = function () {
  console.error('Signed in failure')
}

const changePasswordSuccess = function () {
  console.log('Changed password successfully')
  $('.change-pwd-form').hide()
}

const changePasswordFailure = function () {
  console.error('Change password failure')
}

const signOutSuccess = function () {
  console.log('Signed out successfully')
  // setting this to null to clear out our user data
  store.user = null
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
