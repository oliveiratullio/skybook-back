import {Router} from "express"
import { getAllBooks } from "../controllers/booksControllers"

const booksRouter = Router()

booksRouter.get('/home',getAllBooks)