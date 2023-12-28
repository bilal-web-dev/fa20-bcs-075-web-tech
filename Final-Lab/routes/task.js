import express from "express";
import { create, deleteTask, getMyTasks, update } from "../controllers/task.js";

const router = express.Router();

router.post("/create", create);

router.put("/update/:id", update);

router.delete("/delete/:id", deleteTask);

router.get("/all", getMyTasks);

export default router;