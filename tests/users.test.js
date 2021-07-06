const { createUser, getUser, updateUser, removeUser, createBoardForUser, getBoardsByUser } = require('./common/users');

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
  let foundUser = await getUser(userId);
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

test('creates a board', async () => {
  let newBoard = await createBoardForUser(userId);
  expect(newBoard).toBeDefined();
  expect(newBoard.name).toBe('Home School');
  expect(newBoard.color).toBe('#00A5CF');
  expect(newBoard.user.toString()).toBe(user._id.toString());
});

test('finds a board', async () => {
  let foundBoards = await getBoardsByUser(userId);
  expect(foundBoards.length).toBeTruthy();
  // expect(foundUser.name).toBe(user.name);
  // expect(foundUser._id.toString()).toBe(user._id.toString());
});

// test('deletes a user', async () => {
//   removeUser(userId).resolves;
// });