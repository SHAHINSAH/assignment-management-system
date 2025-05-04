const express = require('express');
const {
  createTopic,
  getTopics,
  updateProblemStatus
} = require('../controllers/topicController');

const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect);

router.post('/', createTopic);
router.get('/', getTopics);
router.put('/:topicId/:problemIndex', updateProblemStatus);

module.exports = router;
