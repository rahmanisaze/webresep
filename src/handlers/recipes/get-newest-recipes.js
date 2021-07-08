const Recipe = require('../../models/Recipe');

const getNewestRecipes = async (request, h) => {
  try {
    const result = await Recipe.find({}).sort({createdAt: -1}).limit(6);
    return result;
  } catch (err) {
    return h.response(err).code(500);
  }
};

module.exports = getNewestRecipes;
