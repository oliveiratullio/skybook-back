import { db } from "../database/database.connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function signUp(req, res) {
  const { name, email, password } = req.body;
  try {
    const existUser = await db.collection("users").findOne({ email });
    if (existUser)
      res.status(409).send("Já existe uma conta cadastada com esse email!");

    const hashPassword = bcrypt.hashSync(password, 2);
    await db
      .collection("users")
      .insertOne({ name, email, password: hashPassword });
    res.sendStatus(201);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
export async function signIn(req, res) {
  const { email, password } = req.body;
  try {
    const user = await db.collection("users").findOne({ email });
    if (!user) return res.status(404).send("Not Found");

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
      await db.collection("sessions").insertOne({ userId: user._id, token });
      res.send({ token, user });
    }
  } catch (err) {
    res.status(500).send(err.message);
    console.log(err);
  }
}

export async function signOut(req, res) {
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");
    if (!token) return res.status(401).send("UNAUTHORIZED");
  
    try {
      await db.collection("sessions").deleteOne({ token });
      res.send("Logout user success");
    } catch (err) {
      res.status(500).send("Erro interno do servidor");
    }
  }
  