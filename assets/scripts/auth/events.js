const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  // console.log('confirm password clicked')
  const data = getFormFields(this)
  // console.log(this)
  // console.log(data)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  console.log('signed out')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signInFailure)
}

const showSignin = function (event) {
  event.preventDefault()
  $('.sign-in').show()
}

const showPwdchange = function (event) {
  event.preventDefault()
  $('.change-pwd').show()
}

const addHandlers = function () {
  $('.sign-up-form').on('submit', onSignUp)
  // $('#sign-in-button').on('submit', onSignIn)
  $('.sign-in-form').on('submit', onSignIn)
  $('.change-pwd-form').on('submit', onChangePassword)
  $('#sign-out-link').on('click', onSignOut)
  // show dropdown again after use is done the first time
  $('#sign-in-dropdown').on('click', showSignin)
  $('#change-pwd-dropdown').on('click', showPwdchange)
}

module.exports = {
  addHandlers
}
