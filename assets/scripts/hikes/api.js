'use strict'

const config = require('../config')
const store = require('../store')

const createHike = function () {
  // console.log('new game created')
  // console.log(game.game)
  return $.ajax({
    url: config.apiOrigin + '/hikes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateHike = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/hikes#patch/' + store.hike.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      // fill in hike data here
    }
  })
}

const getHikes = function () {
  return $.ajax({
    url: config.apiOrigin + '/hikes#show',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteHikes = function () {
  return $.ajax({
    url: config.apiOrigin + '/hikes#delete/' + store.user.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'DELETE'
  })
}

module.exports = {
  createHike,
  updateHike,
  getHikes,
  deleteHikes
}
