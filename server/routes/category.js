const express = require("express");
const Category = require("../models/Category"); // new
const categoryRouter = express.Router();

categoryRouter.use(express.json());

categoryRouter
  .route("/category")
  .get(async (req, res) => {
    try {
      console.log("GET /category");
      let categories = await Category.find();
      categories = categories.map((category) => ({
        id: category._id,
        ...category._doc,
      }));
      // console.log(categories);
      res.json({ data: categories, total: categories.length });
    } catch (e) {
      res.status(404);
      return res.json({ error: e });
    }
  })
  .post(async (req, res) => {
    try {
      console.log("POST /category:\n", req.body);
      const id = req.body.name.toLowerCase().split(" ").join("-");
      let category = await Category.create({ _id: id, ...req.body });
      category = { id: category._id, ...category._doc };
      console.log("category Created:", category);
      res.json({ data: category });
    } catch (e) {
      console.log(e);
      return res.status(400).send({
        error: e,
      });
    }
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported`);
  })
  .delete(async (req, res, next) => {
    console.log("Request:\n", req.body);
    Category.remove({})
      .then(
        (resp) => {
          (res.statusCode = 200),
            res.setHeader("Content-Type", "application/json");
          res.json(resp);
        },
        (err) => next(err)
      )
      .catch((err) => next(err));
  });

categoryRouter
  .route("/category/:id")
  .get(async (req, res) => {
    try {
      console.log("GET /category/:id", req.params.id);
      let category = await Category.findById(req.params.id);
      category = { id: category._id, ...category._doc };
      console.log(category)
      res.json({ data: category });
    } catch (e) {
      console.log(e);
      res.status(404);
      res.send({ error: e });
    }
  })
  .post(async (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported`);
  })
  .put((req, res) => {
    console.log("PUT /category/:id:\n", req.body);
    Category.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then((category) => {
        console.log("category Updated:", category);
        category = { id: category._id, ...category._doc };
        return res.json({ data: category });
      })
      .catch((err) =>
        res.status(400).send({
          error: err,
        })
      );
  })
  .delete(async (req, res) => {
    console.log("GET /category/:id", req.params.id);
    try {
      let category = await Category.deleteOne({ _id: req.params.id });
      category = { id: category._id, ...category._doc };
      return res.json({ data: category });
    } catch {
      res.status(404);
      res.send({ error: "category doesn't exist!" });
    }
  });

module.exports = categoryRouter;
