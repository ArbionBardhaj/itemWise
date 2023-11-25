const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middlewares/errorMiddleware");
const cookieParser = require("cookie-parser")



const app = express();

// Middlewares
app.use(cors());
app.use(cookieParser())
app.use(express.json()); // This middleware is enough for parsing JSON requests
app.use(express.urlencoded({ extended: false }));

// Routes Middleware
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("home");
});

// Error middleware
app.use(errorHandler);

// Connect to the database and start the server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    // Remove the deprecated options
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));
