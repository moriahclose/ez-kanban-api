require('dotenv').config();

const axios = require("axios");

function createUser() {
  return axios.post(`${process.env.API_HOST}/users`, {
    name: 'Moses'
  }).then(({data}) => {
    return data;
  }).catch((err) => {
    console.error("Could not create user:", err.message);
  });
}

function getUser(userId) {
  return axios.get(`${process.env.API_HOST}/users/${userId}`)
  .then(({data}) => {
    return data;
  }).catch((err) => {
    console.error("Could not find user:", err.message);
  });
}

function updateUser(userId, newName) {
  return axios.patch(`${process.env.API_HOST}/users/${userId}`, {
    name: newName
  }).then(({data}) => {
    return data;
  }).catch((err) => {
    console.error("Could not update user:", err.message);
  });
}

function removeUser(userId) {
  return axios.delete(`${process.env.API_HOST}/users/${userId}`)
  .then(({data}) => {
    return data;
  }).catch((err) => {
    console.error("Could not delete user:", err.message);
  });
}

function createBoardForUser(userId) {
  return axios.post(`${process.env.API_HOST}/users/${userId}/boards`, {
    name: 'Home School',
    color: '#00A5CF'
  }).then(({data}) => {
    return data;
  }).catch((err) => {
    console.error("Could not create board:", err.message);
  });
}

function getBoardsByUser(userId) {
  return axios.get(`${process.env.API_HOST}/users/${userId}/boards`).then(({data}) => {
    return data;
  }).catch((err) => {
    console.error("Could not create board:", err.message);
  });
}

module.exports = {
  createUser,
  getUser,
  updateUser,
  removeUser,
  createBoardForUser,
  getBoardsByUser
}