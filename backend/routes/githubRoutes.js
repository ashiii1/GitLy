// routes/githubRoutes.js

const express = require('express');
const router = express.Router();
const { getUserProfileAndRepos } = require('../controllers/githubController');

router.get('/user/:username', getUserProfileAndRepos);

module.exports = router;
