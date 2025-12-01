const express = require('express');
const path = require('path');
const app = express();

// Serve frontend static files
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Demo API
app.get('/api/analytics', (req, res) => {
  res.json({
    followers: 12345,
    growth: [12000, 12100, 12180, 12250, 12390, 12480, 12345]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
