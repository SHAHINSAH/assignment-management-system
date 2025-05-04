const mongoose = require('mongoose');

const ProblemSchema = new mongoose.Schema({
  title: String,
  youtubeLink: String,
  leetcodeLink: String,
  articleLink: String,
  level: { type: String, enum: ['Easy', 'Medium', 'Hard'] },
  done: { type: Boolean, default: false }
});

const TopicSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  title: String,
  problems: [ProblemSchema],
});

module.exports = mongoose.model('Topic', TopicSchema);
