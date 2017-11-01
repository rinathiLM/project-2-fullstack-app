const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    // added this for automatic sign-in
    // .then(api.signIn(data)
    //   .then(ui.signInSuccess)
    //   .catch(ui.signInFailure))
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  // console.log(data)
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
  // console.log('signed out')
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signInFailure)
}

const addHandlers = function () {
  $('.sign-up-form').on('submit', onSignUp)
  $('.sign-in-form').on('submit', onSignIn)
  $('.change-pwd-form').on('submit', onChangePassword)
  $('#sign-out-link').on('click', onSignOut)
}

module.exports = {
  addHandlers
}
