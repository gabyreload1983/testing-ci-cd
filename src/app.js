import express from "express";
import testingRouter from "./routes/testing.router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/new-feature", (req, res) => res.send("<h1>New Feature V1.1.1</h1>"));
app.use("/api/testing", testingRouter);
app.use("/", (req, res) => res.send("<h1>HELLO CI-CD</h1>"));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
