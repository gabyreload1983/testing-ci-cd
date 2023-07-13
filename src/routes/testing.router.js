import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send({ status: "success", message: "Testing CD CI" });
});

export default router;
