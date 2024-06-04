import express from "express";
import linksController from "../controllers/linksController.js"

const LinksRouter = express.Router();

LinksRouter.get("/redirect/:id", linksController.redirect);
LinksRouter.get("/linkState/:id", linksController.getClickStats);

LinksRouter.get("/", linksController.get);
LinksRouter.get("/:id", linksController.getById);
LinksRouter.post("/", linksController.add);
LinksRouter.put("/:id", linksController.update);
LinksRouter.delete("/:id", linksController.delete);

export default LinksRouter;