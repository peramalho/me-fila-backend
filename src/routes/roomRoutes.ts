import express from "express";
import {
  createRoom,
  getRoom,
  deleteRoom,
} from "../controllers/roomControllers";
import { authenticateHost } from "../middleware/auth";

const roomRoutes = express.Router();

roomRoutes.post("/", createRoom);

roomRoutes.get("/:roomId", getRoom);
roomRoutes.delete("/:roomId", authenticateHost, deleteRoom);

export { roomRoutes };
