const Recipe = require('../../models/Recipe');

const getRecipeImage = async (request, h) => {
  try {
    const {id} = request.params;
    const result = await Recipe.findOne({'_id': id}, 'namaresep').exec();
    return h.file(`./src/assets/${result.namaresep}.jpg`);
  } catch (err) {
    return h.response(err).code(500);
  }
};

module.exports = getRecipeImage;
