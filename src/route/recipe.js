const addRecipe = require('../handlers/recipes/add-recipe');
const recipesByUser = require('../handlers/recipes/recipes-by-user');

const recipeRoute = [
  {
    method: 'POST',
    path: '/recipe',
    options: {
      payload: {
        multipart: true,
      },
    },
    handler: addRecipe,
  },
  {
    method: 'GET',
    path: '/recipes/user/{id}',
    handler: recipesByUser,
  },
];

module.exports = recipeRoute;
