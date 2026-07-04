const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = process.env.PORT || 10000;

app.use(
  "/",
  createProxyMiddleware({
    target: "https://api.binance.com",
    changeOrigin: true,
    logLevel: "silent",
  })
);

app.listen(PORT, () => {
  console.log(`Binance proxy listening on port ${PORT}`);
});
