const fs = require('fs');

// STEP 1: Load JSON file
const users = require('./user.json');

// Defining new user
let user = {
  name: 'Steve',
  age: 30,
  language: ['French', 'Spanish', 'English'],
};
// STEP 2: Adding new data to users object
users.push(user);
// STEP 3: Writing to a file
fs.writeFile('user.json', JSON.stringify(users), (err) => {
  // Checking for errors
  if (err) throw err;

  console.log('Done writing'); // Success
});