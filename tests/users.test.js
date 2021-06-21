require('dotenv').config();

const axios = require("axios");
const User = require("../models/user");

let user;
let userId;

test('creates a user', async () => {
  user = await createUser();
  expect(user).toBeDefined();
  expect(user.name).toBe('Moses');
  expect(user._id).toBeTruthy();
  userId = user._id;
});

test('finds a user', async () => {
  let foundUser = await findUser(userId);
  expect(foundUser).toBeDefined();
  expect(foundUser.name).toBe(user.name);
  expect(foundUser._id.toString()).toBe(user._id.toString());
});

test('updates a user', async () => {
  let updatedUser = await updateUser(userId, 'Moses Close');
  expect(updatedUser).toBeDefined();
  expect(updatedUser.name).toBe('Moses Close');
  expect(updatedUser._id.toString()).toBe(user._id.toString());
});

// test('deletes a user', async () => {
//   deleteUser(userId);
// });

function createUser() {
  return axios.post(`${process.env.API_HOST}/users`, {
    name: 'Moses'
  }).then(({data}) => {
    return data;
  }).catch((err) => {
    console.error("Could not create user:", err.message);
  });
}

function findUser(userId) {
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

function deleteUser(userId) {
  return axios.delete(`${process.env.API_HOST}/users/${userId}`)
  .then(({data}) => {
    return data;
  }).catch((err) => {
    console.error("Could not delete user:", err.message);
  });
}