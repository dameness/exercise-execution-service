import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorHandler";
import { authRouter } from "./modules/auth/auth.router";
import { exercisesRouter } from "./modules/exercises/exercises.router";
import { executionsRouter } from "./modules/executions/executions.router";
import { usersRouter } from "./modules/users/users.router";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/auth", authRouter);
app.use("/exercises", exercisesRouter);
app.use("/executions", executionsRouter);
app.use("/", usersRouter);

app.use(errorHandler);

export { app };
