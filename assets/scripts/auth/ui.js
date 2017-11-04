'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  // console.log('Sign up button clicked successfully')
  $('#sign-up-modal').modal('hide')
  // hiding html elements once sign up success
  $('.heading').hide()
  $('.user-message').show()
  $('#user-message').text('You succesfully created an account, login to start tracking your next adventure!')
  $('#sign-up-name').val('')
  $('#sign-up-pwd').val('')
  $('#sign-up-pwd-2').val('')
}

const signUpFailure = function () {
  // console.log('Sign up button clicked failure')
  $('#sign-up-modal-label').text('Hmm, something isn\'t right, try again.')
  // console.error()
}

const signInSuccess = function (data) {
  store.user = data.user
  // console.log('Signed in successfully')
  // console.log(data)
  $('#sign-in-modal').modal('hide')
  $('.user-message').show()
  $('#user-message').text('Welcome! What would you like to do?')
  // hide html elements in home page and dropdown menu
  $('.heading').hide()
  $('.sign-in').hide()
  // show  elements after logged in
  $('.hidden-buttons').show()
  $('.get-hikes-button').show()
  // display navbar links on signin
  $('#change-pwd-link').show()
  $('#sign-out-link').show()
  $('#sign-in-link').hide()
  $('#sign-in-name').val('')
  $('#sign-in-pwd').val('')
}

const signInFailure = function () {
  // console.error('Signed in failure')
  $('#sign-in-modal-label').text('Hmm, something isn\'t right, try again.')
}

const changePasswordSuccess = function () {
  // console.log('Changed password successfully')
  $('#change-pwd-modal').modal('hide')
  $('#user-message').text('You changed your password successfully. What would you like to do?')
  $('#old-pwd').val('')
  $('#new-pwd').val('')
}

const changePasswordFailure = function () {
  // console.error('Change password failure')
  $('#change-pwd-modal-label').text('Hmm, something isn\'t right, try again.')
}

const signOutSuccess = function () {
  // console.log('Signed out successfully')
  // setting this to null to clear out our user data
  store.user = null
  // hide all the other fields and show home screen again
  $('.heading').show()
  $('.hidden-buttons').hide()
  $('.get-hikes-button').hide()
  $('.user-message').hide()
  $('#user-message').text('')
  $('#content').empty()
  // hide and display navbar links on signout
  $('#change-pwd-link').hide()
  $('#sign-out-link').hide()
  $('#sign-in-link').show()
}

const signOutFailure = function () {
  // console.log('Failed to sign out')
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
