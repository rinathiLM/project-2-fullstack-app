'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log('Sign up button clicked successfully')
  $('.sign-up-form').hide()
}

const signUpFailure = function () {
  console.log('Sign up button clicked failure')
  console.error()
}

const signInSuccess = function (data) {
  store.user = data.user
  console.log('Signed in successfully')
  console.log(data)
  $('.sign-in-form').hide()
  // show change-password fields
  // show hiking fields
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
  // console.log('Signed out successfully')
  // store.user = null // setting this to null to clear out our user data
  // $('#logged-in-message').text('')
  // $('.sign-up-functionality').show()
  // $('.sign-in-functionality').show()
  // $('.sign-out').hide()
  // $('.new-game').hide()
  // $('.stats').hide()
  // $('.display-game-board').hide()
  // $('.home').hide()
  // $('#change-password-button').hide()
  // // have to clear out all the values from the sign-in/up screen
  // $('#sign-in-name').val('')
  // $('#sign-in-pwd').val('')
  // $('#sign-up-name').val('')
  // $('#sign-up-pwd').val('')
  // $('#sign-up-pwd-2').val('')
}

const signOutFailure = function () {
//  console.error(error)
  // $('#logged-in-message').text('Something is wrong, please try signing out again.')
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
