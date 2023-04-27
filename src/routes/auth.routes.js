import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import {loginSchema, userSchema} from "../schemas/auth.schema.js"
import signUp, {signIn}  from "../controllers/auth.controller.js";
const authRouter= Router()

authRouter.post("/sign-up",validateSchema(userSchema), signUp)
authRouter.post("/",validateSchema(loginSchema),signIn)
export default authRouter