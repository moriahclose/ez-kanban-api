const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  checklists: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Checklist'
  },
});

module.exports = mongoose.model('Task', taskSchema);