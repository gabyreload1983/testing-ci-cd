import express from "express";
import testingRouter from "./routes/testing.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", (req, res) => res.send("<h1>HELLO CI-CD V1.2.5</h1>"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
