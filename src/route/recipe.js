const addRecipe = require('../handlers/recipes/add-recipe');

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
];

module.exports = recipeRoute;
