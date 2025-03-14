import express from "express";
import {
  createRoom,
  getRoom,
  deleteRoom,
} from "../controllers/roomControllers";

const roomRoutes = express.Router();

roomRoutes.post("/", createRoom);

roomRoutes.get("/:roomId", getRoom);
roomRoutes.delete("/:roomId", deleteRoom);

export { roomRoutes };
