// Entry point for the application
const express = require('express');
const dotenv = require('dotenv');
const todoRoutes = require('./routes/todoRoutes');

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json()); // Parse JSON bodies

// Define routes
app.use('/todos', todoRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

module.exports = app;