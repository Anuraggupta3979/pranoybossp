const express = require("express");
const Product = require("../models/Product"); // new
const productRouter = express.Router();

productRouter.use(express.json());

productRouter
  .route("/product")
  .get(async (req, res) => {
    try {
      console.log("GET /product:\n", req.body);
      let products = await Product.find();
      products = products.map((product) => ({ id: product._id, ...product }));
      // console.log(products);
      res.json({ data: products, total: products.length});
    } catch (e) {
      res.status(404);
      return res.json({ error: e });
    }
  })
  .post(async (req, res) => {
    try {
      const id = req.body.name.toLowerCase().split(" ").join("-");
      const product = await Product.create({ _id: id, ...req.body });
      console.log("Product Created:", product);
      res.send(product);
    } catch (e) {
      return res.send(e);
    }
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end(`PUT operation not supported`);
  })
  .delete(async (req, res, next) => {
    console.log("Request:\n", req.body);
    Product.remove({})
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

productRouter
  .route("/product/:id")
  .get(async (req, res) => {
    try {
      const post = await Product.findOne({ _id: req.params.id });
      res.send(post);
    } catch (e) {
      res.status(404);
      res.send({ error: "Product doesn't exist!" });
    }
  })
  .post(async (req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported`);
  })
  .put((req, res, next) => {
    (req, res, next) => {
      Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      )
        .then(
          (product) => {
            console.log("Product Created:", product);
            (res.statusCode = 200),
              res.setHeader("Content-Type", "application/json");
            res.json(product);
          },
          (err) => next(err)
        )
        .catch((err) => next(err));
    };
  })
  .delete(async (req, res, next) => {
    console.log("Request:\n", req.body);
    try {
      await Product.deleteOne({ _id: req.params.id });
      res.status(204).send();
    } catch {
      res.status(404);
      res.send({ error: "Product doesn't exist!" });
    }
  });

module.exports = productRouter;
