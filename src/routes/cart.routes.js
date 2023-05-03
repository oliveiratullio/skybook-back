import { Router } from "express";
import { chosedBook, getChosedBook } from "../controllers/cart.controllers.js";

const cartRouter= Router()

cartRouter.post("/cart", chosedBook)
cartRouter.get("/cart", getChosedBook)

export default cartRouter