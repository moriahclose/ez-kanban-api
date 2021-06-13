const mongoose = require('mongoose');

const checklistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  task: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  },
  items: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  }],
});

module.exports = mongoose.model('Checklist', checklistSchema);