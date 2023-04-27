import { db } from "../database/database.connection.js"
import bcrypt from "bcrypt"

export default async function signUp(req, res) {
    const { name, email, password } = req.body
    try {
        const existUser = await db.collection("users").findOne({ email })
        if (existUser) res.status(409).send("Já existe uma conta cadastada com esse email!")

        const hashPassword= bcrypt.hashSync(password,2)
        await db.collection("users").insertOne({name, email, password: hashPassword})
        res.sendStatus(201)
    } catch (error) {
        res.status(500).send(error.message)
    }

}