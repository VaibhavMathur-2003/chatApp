const express  = require('express');
const dotenv  = require('dotenv');
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/userRoutes");

const { notFound, errorHandler } = require('./middleware/errorMiddleware');
dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(notFound)
app.use(errorHandler)

app.use('/api/user', userRoutes )
app.use('/api/chat', chatRoutes)

const PORT = process.env.PORT || 5000;
app.listen(5000, console.log("server started"));