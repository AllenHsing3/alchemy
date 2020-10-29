const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  photo: {
    data: Buffer,
  },
});

// PhotoSchema.methods.toJSON = function () {
//     const result = this.toObject();
//     delete result.photo;
//     return result;
//   };

module.exports = Photo = mongoose.model('photo', PhotoSchema);
