import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //for json data limit
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //for formdata
app.use(express.static("public")); //for static files eg: images, pdf's etc
app.use(cookieParser()); //for cookies
app.on("error", (err) => {
  console.log(err);
  throw err;
});

export { app };
