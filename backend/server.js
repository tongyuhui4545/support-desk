const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;
const { errorHandler } = require("./middleware/errorMiddleware");

//Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("hello");
});

//Routes
app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

app.use(errorHandler);
