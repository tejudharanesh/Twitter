import express from "express";
import { protectedRoute } from "../middleware/protectRoute.js";
import { getNotifications } from "../controllers/notifications.controller.js";

const router = express.Router();

router.get("/", protectedRoute, getNotifications);

export default router;
