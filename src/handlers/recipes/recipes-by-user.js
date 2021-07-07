const Recipe = require('../../models/Recipe');

const recipesByUser = async (request, h) => {
  try {
    const {id} = request.params;
    console.log(id);
    const result = await Recipe.find({iduser: id});
    return result;
  } catch (err) {
    return h.response(err).code(500);
  }
};

module.exports = recipesByUser;
