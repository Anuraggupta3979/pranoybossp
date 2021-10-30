const express = require("express");
const Product = require("../models/Product"); // new
const categoryRouter = express.Router();

categoryRouter.use(express.json());

// Get all posts
categoryRouter.get("/category", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (e) {
    return res.status(404);
  }
});

categoryRouter.post("/category", async (req, res) => {
  try {
    const product = new Product({
      name: req.body.title,
      category: req.body.content,
    });
    await product.save();
    res.send(product);
  } catch (e) {
    return res.send(e);
  }
});

module.exports = categoryRouter;
