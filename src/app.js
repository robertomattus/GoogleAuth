const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const webhookRoutes = require("./routes/webhook.routes");

app.use("/webhook", express.raw({ type: "application/json" }));

app.use(cors());
app.use(express.json());

app.use("/webhook", webhookRoutes);

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
    status: "success",
  });
});

module.exports = app;
