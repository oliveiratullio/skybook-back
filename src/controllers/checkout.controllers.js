import { db } from "../database/database.connection.js"

export async function postCheckout(req, res) {
    try {
        const cartBooks = await db.collection("cart").find().toArray()
        res.status(200).send(cartBooks)
    } catch (err) {
        res.status(500).send(err)
    }
}

export async function buyProducts(req, res) {
    const { address, paymentMethod, userInformation } = req.body
    try {
        await db.collection("checkout").insertOne({ address, paymentMethod, userInformation })
        req.status(200).send("Compra finalizada")
    } catch (err) {
        res.status(500).send(err)
    }
}