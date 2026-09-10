const express = require('express');
const cors = require('cors');
const sequelize = require('./config/db');
const User = require('./models/User');
const Product = require('./models/Product');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/products', productRoutes);

// Sync Models with Database
sequelize.sync({ alter: true })
  .then(() => console.log('Database & Tables Synced Successfully!'))
  .catch(err => console.error('Database Sync Error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));