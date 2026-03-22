const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./models/Product");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("API is running");
});

// =======================
// ADD PRODUCT API
// =======================
app.post("/add-product", async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).json({ error: "Product name required" });
    }

    const product = new Product({
      name: req.body.name
    });

    await product.save();
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =======================
// ADD RATING API
// =======================
app.post("/rate/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    // Check product exists
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const rating = req.body.rating;

    // Validate rating exists
    if (!rating) {
      return res.status(400).json({ error: "Rating is required" });
    }

    // Validate rating range
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ error: "Rating must be between 1 and 5" });
    }

    // Add rating
    product.ratings.push(rating);

    // Calculate average
    const total = product.ratings.reduce((a, b) => a + b, 0);
    const avg = total / product.ratings.length;

    product.averageRating = avg;

    await product.save();

    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =======================
// GET RANKED PRODUCTS API
// =======================
app.get("/products", async (req, res) => {
  try {
    const products = await Product.find().sort({ averageRating: -1 });

    // Add rank dynamically
    const rankedProducts = products.map((p, index) => ({
      ...p._doc,
      rank: index + 1
    }));

    res.json(rankedProducts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =======================
// MONGODB CONNECTION
// =======================
mongoose.connect("mongodb+srv://sritanay:sritanay2005@cluster0.dhbkuy4.mongodb.net/productDB?retryWrites=true&w=majority")
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch(err => console.log(err));