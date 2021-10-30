const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routes/product");
const categoryRouter = require("./routes/category");

const url = "mongodb://localhost:27017/db";

const PORT = 5000;

const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

connect.then(() => {
  const app = express();
  app.use("/api", productRouter);
  app.use("/api", categoryRouter);

  app.listen(PORT, () => {
    console.log(`Server has started! on http://localhost:${PORT}`);
  });
});
