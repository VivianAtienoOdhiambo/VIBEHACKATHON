const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const cors = require('cors'); // We'll need this for the frontend later

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// Connect to MongoDB
mongoose.connect('mongodb+srv://odhiamboatieno774_db_user:218VHb5SO4HANex0@cluster0.m4cwvfb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
	.then(() => console.log('MongoDB connected...'))
	.catch(err => console.log(err));

// Use the authentication routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
