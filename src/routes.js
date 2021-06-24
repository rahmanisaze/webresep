const loginUser = require('./handlers/users/login-user');
const registerUser = require('./handlers/users/register-user');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => ({
      status: 'success',
      message: 'Welcome to webresep-api',
    }),
  },
  {
    method: 'POST',
    path: '/user',
    handler: registerUser,
  },
  {
    method: 'GET',
    path: '/user',
    handler: loginUser,
  },
];

module.exports = routes;
