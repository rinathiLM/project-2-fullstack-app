'use strict'

const config = require('../config')
const store = require('../store')

const createHike = function (data) {
  console.log('hike created')
  console.log(data)
  return $.ajax({
    url: config.apiOrigin + '/hikes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateHike = function (data, id) {
  return $.ajax({
    url: config.apiOrigin + '/hikes/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getHikes = function () {
  return $.ajax({
    url: config.apiOrigin + '/hikes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteHike = function (hikeId) {
  console.log(hikeId)
  return $.ajax({
    url: config.apiOrigin + '/hikes/' + hikeId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createHike,
  updateHike,
  getHikes,
  deleteHike
}
