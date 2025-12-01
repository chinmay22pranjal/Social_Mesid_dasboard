/*
 Minimal Express server to serve API endpoints for the Social Media Dashboard demo.
 To run:
   cd backend
   npm install
   node server.js
*/
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

// Demo API: returns fake analytics
app.get('/api/analytics', (req, res) => {
  res.json({
    followers: 12345,
    growth: [12000,12100,12180,12250,12390,12480,12345]
  });
});

// Serve frontend (if built/copied into backend/public)
app.use(express.static(path.join(__dirname, '..', 'frontend')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log('Server running on port', PORT));
