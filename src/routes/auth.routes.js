import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middleware.js";
import {loginSchema, userSchema} from "../schemas/auth.schema.js"
import signUp, {signIn, signOut}  from "../controllers/auth.controller.js";
const authRouter= Router()

authRouter.post("/sign-up",validateSchema(userSchema), signUp)
authRouter.post("/home",validateSchema(loginSchema),signIn)
authRouter.post("/sign-out",signOut)
export default authRouter