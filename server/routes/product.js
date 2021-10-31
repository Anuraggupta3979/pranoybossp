const express = require("express");
const Product = require("../models/Product"); // new
const productRouter = express.Router();

productRouter.use(express.json());

productRouter
  .route("/product")
  .get(async (req, res) => {
    try {
      console.log("GET /product");
      let products = await Product.find();
      products = products.map((product) => ({
        id: product._id,
        ...product._doc,
      }));
      // console.log(products);
      res.json({ data: products, total: products.length });
    } catch (e) {
      res.status(404);
      return res.json({ error: e });
    }
  })
  .post(async (req, res) => {
    try {
      console.log("POST /product:\n", req.body);
      const id = req.body.name.toLowerCase().split(" ").join("-");
      let product = await Product.create({ _id: id, ...req.body });
      product = { id: product._id, ...product._doc };
      console.log("Product Created:", product);
      res.json({ data: product });
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
      console.log("GET /product/:id", req.params.id);
      let product = await Product.findById(req.params.id);
      product = { id: product._id, ...product._doc };
      res.json({ data: product });
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
    console.log("PUT /product/:id:\n", req.body);
    Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then((product) => {
        console.log("Product Updated:", product);
        product = { id: product._id, ...product._doc };
        return res.json({ data: product });
      })
      .catch((err) =>
        res.status(400).send({
          error: err,
        })
      );
  })
  .delete(async (req, res) => {
    console.log("GET /product/:id", req.params.id);
    try {
      let product = await Product.deleteOne({ _id: req.params.id });
      product = { id: product._id, ...product._doc };
      return res.json({ data: product });
    } catch {
      res.status(404);
      res.send({ error: "Product doesn't exist!" });
    }
  });

module.exports = productRouter;
