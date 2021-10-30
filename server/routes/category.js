const express = require("express");
const Category = require("../models/Category");
const categoryRouter = express.Router();

categoryRouter.use(express.json());

// Get all posts
categoryRouter.get("/category", async (req, res) => {
  try {
    const category = await Category.find();
    res.send(category);
  } catch (e) {
    return res.status(404);
  }
});

categoryRouter.post("/category", async (req, res) => {
  try {
    const id = req.body.name.toLowerCase().split(" ").join("-");
    const category = new Category({ _id: id, ...req.body });
    await category.save();
    console.log("Category Created:", category);
    res.send(category);
  } catch (e) {
    return res.send(e);
  }
});

module.exports = categoryRouter;
