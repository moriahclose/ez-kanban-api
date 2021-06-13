const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  checklist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Checklist'
  },
});

module.exports = mongoose.model('Item', itemSchema);