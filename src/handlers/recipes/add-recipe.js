const Recipe = require('../../models/Recipe');
const fs = require('fs');

const handleRecipeUpload = (payload) => {
  return new Promise((resolve, reject) => {
    let {
      namaresep,
      deskripsi,
      bahan,
      caramasak,
      image,
      iduser,
    } = payload;
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    const imagePath = `./src/assets/${namaresep}.jpg`;

    fs.writeFile(imagePath, image, (err) => {
      if (err) {
        reject(err);
      }
      bahan = JSON.parse(bahan);
      caramasak = JSON.parse(caramasak);
      const recipe = new Recipe({
        namaresep,
        deskripsi,
        imagePath,
        bahan,
        caramasak,
        image: imagePath,
        iduser,
        createdAt,
        updatedAt,
      });
      const result = recipe.save();
      resolve(result);
    });
  });
};

const addRecipe = async (request, h) => {
  try {
    const {
      payload,
    } = request;
    const result = await handleRecipeUpload(payload);
    return result;
  } catch (err) {
    return h.response(err).code(500);
  }
};

module.exports = addRecipe;
