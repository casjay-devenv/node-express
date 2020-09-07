const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    Welcome: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
    Version: process.env.VERSION || '1.0.0',
  });
});

module.exports = router;
