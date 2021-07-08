const addRecipe = require('../handlers/recipes/add-recipe');
const getRecipeImage = require('../handlers/recipes/get-recipe-image');
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
  {
    method: 'GET',
    path: '/recipe/images/{id}',
    handler: getRecipeImage,
  },
];

module.exports = recipeRoute;
