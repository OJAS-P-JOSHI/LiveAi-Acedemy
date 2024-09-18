const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const logger = require('./utils/logger');
const swaggerUi = require('swagger-ui-express'); // Import Swagger UI
const swaggerDocs = require('./swagger/swaggerConfig'); // Import Swagger configuration

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const courseRoutes = require('./routes/courseRoutes');
const instructorRoutes = require('./routes/instructorRoutes');
// Add other route imports if needed

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/instructors', instructorRoutes);

// Add more routes as needed
// app.use('/api/transactions', transactionRoutes);
// app.use('/api/reviews', reviewRoutes);

module.exports = app;
