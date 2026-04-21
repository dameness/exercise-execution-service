import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";
import { authRouter } from "./modules/auth/auth.router";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/auth", authRouter);

app.use(errorHandler);

export { app };
