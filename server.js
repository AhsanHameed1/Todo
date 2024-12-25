const app = require('./app');
const { sequelize } = require('./config/database');

const PORT = process.env.PORT;

(async () => {
  try {
    await sequelize.sync(); // Ensure DB is ready
    app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Failed to start server:', err);
  }
})();