const express = require("express");
const Email = require("../models/email"); // new
const emailRouter = express.Router();

emailRouter.use(express.json());

emailRouter
  .route("/email")
  .get(async (req, res) => {
    try {
      console.log("GET /email");
      let emails = await Email.find();
      emails = emails.map((email) => ({
        id: email._id,
        ...email._doc,
      }));
      // console.log(emails);
      res.json({ data: emails, total: emails.length });
    } catch (e) {
      res.status(404);
      return res.json({ error: e });
    }
  })
  .post(async (req, res) => {
    try {
      console.log("POST /email:\n", req.body);
      const id = req.body.name.toLowerCase().split(" ").join("-");
      let email = await Email.create({ _id: id, ...req.body });
      email = { id: email._id, ...email._doc };
      console.log("email Created:", email);
      res.json({ data: email });
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
    Email.remove({})
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

emailRouter
  .route("/email/:id")
  .get(async (req, res) => {
    try {
      console.log("GET /email/:id", req.params.id);
      let email = await Email.findById(req.params.id);
      email = { id: email._id, ...email._doc };
      // console.log(email)
      res.json({ data: email });
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
    console.log("PUT /email/:id:\n", req.body);
    Email.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
      .then((email) => {
        console.log("email Updated:", email);
        email = { id: email._id, ...email._doc };
        return res.json({ data: email });
      })
      .catch((err) =>
        res.status(400).send({
          error: err,
        })
      );
  })
  .delete(async (req, res) => {
    console.log("GET /email/:id", req.params.id);
    try {
      let email = await Email.deleteOne({ _id: req.params.id });
      email = { id: email._id, ...email._doc };
      return res.json({ data: email });
    } catch {
      res.status(404);
      res.send({ error: "email doesn't exist!" });
    }
  });

module.exports = emailRouter;
