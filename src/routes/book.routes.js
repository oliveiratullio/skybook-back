    import {Router} from "express"
    import { getAllBooks, searchOneProduct } from "../controllers/booksControllers.js"

    const booksRouter = Router()

    booksRouter.get("/home",getAllBooks)
    booksRouter.get("/home",searchOneProduct)

    export default booksRouter