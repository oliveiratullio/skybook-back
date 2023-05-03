import { db } from "../database/database.connection.js"
import { ObjectId } from "mongodb"

export async function chosedBook(req, res) {
  const { _id } = req.body
  try {
    const book = await db.collection("books").findOne({ _id: new ObjectId(_id) })
    await db.collection("cart").insertOne(book)
    res.status(201).send(`livro:${book} adicionado com sucesso.`)
  } catch (err) {
    console.log(err)
  }
}

export async function getChosedBook(req, res) {
  try {
    const cartBooks = await db.collection("cart").find().toArray()
    res.status(200).send(cartBooks)
  } catch (err) {
    res.status(500).send(err)
  }

}