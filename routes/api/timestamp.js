const express = require('express');
const router = express.Router();

// Route to /api/timestamp
router.get('/', (req, res) => {
  res.json({ unix: Date.now(), utc: Date() });
});

// Route to /api/timestamp/:date
router.get('/:date', (req, res) => {
  let dateString = req.params.date;
  let date;

  // If dateString is a number, use parseInt
  if (!isNaN(dateString)) {
    date = new Date(parseInt(dateString));
  } else {
    date = new Date(dateString);
  }

  if (date.toString() === 'Invalid Date') {
    res.json({ error: date.toString() });
  } else {
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
  }
});

module.exports = router;
