const Recipe = require('../../models/Recipe');
const mongoose = require('mongoose');
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
    const imageBuffer = Buffer.from(image, 'base64');
    fs.writeFile(imagePath, imageBuffer, (err) => {
      if (err) {
        reject(err);
      }
      bahan = JSON.parse(bahan);
      caramasak = JSON.parse(caramasak);
      const id = new mongoose.Types.ObjectId().toHexString();
      const recipe = new Recipe({
        _id: id,
        namaresep,
        deskripsi,
        imagePath,
        bahan,
        caramasak,
        image: `http://localhost:3000/recipe/images/${id}`,
        iduser,
        createdAt,
        updatedAt,
      });
      recipe.save();
      resolve({message: 'Recipe added succesfully!'});
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
