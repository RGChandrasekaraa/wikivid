// Import the required modules
const express = require("express");
const { engine } = require("express-handlebars");
const cors = require("cors");

const app = express();

// Set up CORS
app.use(cors());

// Set up Handlebars as the view engine with the 'engine' function
app.engine("handlebars", engine());
app.set("view engine", "handlebars");

// Serve static files from the "public" directory
app.use(express.static("public"));

// Define a route for the homepage
app.get("/", (req, res) => {
  // Render the 'home' template from the 'views' directory
  res.render("home");
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
