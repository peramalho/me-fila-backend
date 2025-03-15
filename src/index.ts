import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import { roomRoutes } from "./routes/roomRoutes";
import { ApiResponse } from "./controllers/types";

dotenv.config();

const app = express();
app.use(morgan("common"));

app.use("/room", roomRoutes);

app.get("/", (_req, res: Response<ApiResponse<{ message: string }>>) => {
  res.json({
    data: { message: "Welcome to the Me Fila API. Check docs for how to use." },
    error: null,
  });
});

app.use(
  (
    error: Error,
    _req: Request,
    res: Response<ApiResponse<null>>,
    _next: NextFunction
  ) => {
    console.error(error.stack);
    res.status(500).json({
      data: null,
      error: {
        message: "Something went wrong!",
        code: 500,
        stack: error.stack,
      },
    });
  }
);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`[server]: Server is running port ${port}`);
});
