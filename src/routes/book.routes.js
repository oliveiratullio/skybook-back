    import {Router} from "express"
    import { getAllBooks } from "../controllers/booksControllers.js"

    const booksRouter = Router()

    booksRouter.get("/home",getAllBooks)

    export default booksRouter