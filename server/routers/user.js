import { Router } from "express";
import userController from "../controller/user.js";
const router = Router();
router.get("/", userController.getAll);
router.post("/", userController.createUser);
router.post("/delete", userController.deleteUser);
export default router;
