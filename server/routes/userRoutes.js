import express from "express";
import { ClerkWebhooks } from "../controllers/userControllers.js";


const userRouter= express.Router();

userRouter.post("/webhooks",ClerkWebhooks)

export default userRouter;