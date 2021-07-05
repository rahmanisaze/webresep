const mongoose = require('mongoose');
const {Schema} = mongoose;

const RecipeSchema = new Schema({
  namaresep: String,
  deskrispi: String,
  bahan: Array,
  caramasak: Array,
  image: String,
  iduser: String,
  createdAt: Date,
  updatedAt: Date,
});

module.exports = mongoose.model('Recipe', RecipeSchema);
