const Recipe = require('../../models/Recipe');

const deleteRecipe = async (request, h) => {
  try {
    const {id} = request.params;
    await Recipe.findOneAndDelete({'_id': id});
    return {
      status: 'success',
      message: 'Recipe Deleted Successfully',
    };
  } catch (err) {
    return h.response(err).code(500);
  }
};

module.exports = deleteRecipe;
