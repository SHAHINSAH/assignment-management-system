const Topic = require('../models/Topic');

exports.createTopic = async (req, res, next) => {
  try {
    const topic = new Topic({
      userId: req.user.id,
      title: req.body.title,
      problems: req.body.problems,
    });
    await topic.save();
    res.status(201).json(topic);
  } catch (err) {
    next(err);
  }
};

exports.getTopics = async (req, res, next) => {
  try {
    const topics = await Topic.find({ userId: req.user.id });
    res.json(topics);
  } catch (err) {
    next(err);
  }
};

exports.updateProblemStatus = async (req, res, next) => {
  const { topicId, problemIndex } = req.params;
  try {
    const topic = await Topic.findOne({ _id: topicId, userId: req.user.id });
    if (!topic) return res.status(404).json({ msg: 'Topic not found' });

    topic.problems[problemIndex].done = !topic.problems[problemIndex].done;
    await topic.save();
    res.json(topic);
  } catch (err) {
    next(err);
  }
};
