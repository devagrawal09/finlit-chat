const users = [];

const advisors = [{
  id: `dev`,
  username: `Dev Agrawal`,
  room: `advice`
}, {
  id: `bot`,
  username: `Call Him Jerry`,
  room: `bot`
}];

// Join user to chat
function newUser(id, username) {
  const user = { id, username, room: `bot` };

  users.push(user);

  return user;
}

// Get current user
function getActiveUser(id) {
  return users.find(user => user.id === id);
}

// User leaves chat
function exitRoom(id) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getIndividualRoomUsers(room) {
  return users.filter(user => user.room === room);
}

module.exports = {
  newUser,
  getActiveUser,
  exitRoom,
  getIndividualRoomUsers
};