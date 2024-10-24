import express from "express";
import { config } from "dotenv";

config({ path: "./env/.env" });

const app = express();
const port = 3000;
app.get("/config", (req, res) => {
  const envVars = {
    DATABASE_URL: process.env.DATABASE_URL,
    CACHE_SIZE: process.env.CACHE_SIZE,
    PAYMENT_GATEWAY_URL: process.env.PAYMENT_GATEWAY_URL,
    MAX_CART_ITEMS: process.env.MAX_CART_ITEMS,
    SESSION_TIMEOUT: process.env.SESSION_TIMEOUT,
  };

  res.send(`
    <h1>Environment Variables</h1>
    <pre>${JSON.stringify(envVars, null, 2)}</pre>
  `);
});

app.get("/secrets", (req, res) => {
  const envVars = {
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
  };

  res.send(`
    <h1>Environment Variables</h1>
    <pre>${JSON.stringify(envVars, null, 2)}</pre>
  `);
});

app.use("/", (req, res) => {
  res.send("seems to be ok!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
