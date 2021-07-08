const Recipe = require('../../models/Recipe');

const getAllRecipes = async (request, h) => {
  try {
    const result = await Recipe.find({}).sort({createdAt: -1});
    return result;
  } catch (err) {
    return h.response(err).code(500);
  }
};

module.exports = getAllRecipes;
