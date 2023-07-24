import express from "express";
import router from "./routes/router";
import cors from "cors"
const app = express();
const port = 3000;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(
  cors({
    origin: process.env.WEB_URL || "*",
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.use(router);
app.listen(port, () => {
  console.log("API running on port " + port);
});
