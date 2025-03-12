import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { hostRoutes } from "./routes/hostRoutes";

dotenv.config();

const app = express();
app.use(morgan("common"));

app.use("/host", hostRoutes);

app.get("/", (_req, res, next) => {
  res.json({ message: "Welcome to the me-fila API" });
});

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`[server]: Server is running port ${port}`);
});
