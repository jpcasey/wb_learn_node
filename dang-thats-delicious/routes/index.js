const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const context = {
    name: 'Paul',
    age: 29
  };
  res.render('hello', context);
});

module.exports = router;
