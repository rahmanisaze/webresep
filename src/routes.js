const user = require('./route/user');
const recipe = require('./route/recipe');

const routes = [].concat(user, recipe);

module.exports = routes;
