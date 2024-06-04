import express from "express";
import usersController from "../controllers/usersController.js"


const UserRouter = express.Router();

UserRouter.get("/", usersController.get);
UserRouter.get("/:id", usersController.getById);
UserRouter.post("/", usersController.add);
UserRouter.put("/:id", usersController.update);
UserRouter.delete("/:id", usersController.delete);
export default UserRouter;
