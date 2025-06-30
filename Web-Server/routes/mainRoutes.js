const express = require('express');
const router = express.Router();

// GET /api/about
router.get('/about', (req, res) => {
  res.json({ message: 'This is the About Page from /api/about' });
});

// POST /api/submit
router.post('/submit', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required' });
  }
  res.status(201).json({
    message: `Data received for ${name}`,
    data: { name, email },
  });
});

// GET /api/contact
router.get('/contact', (req, res) => {
  res.json({
    company: "Express Web Server",
    phone: "+91-9876543210",
    email: "support@expressapp.com"
  });
});

module.exports = router;
