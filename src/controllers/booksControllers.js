import {db} from "../database/database.connection.js"
import { romancebooks } from "../models/books.models.js";

export async function addBook(book) {   
  console.log("book",book)
  try {
    const result = await db.collection("books").insertMany(book);
    console.log(`${result.insertedCount} livros adicionados ao banco de dados`);
  } catch (err) {
    console.log(err, "Erro ao adicionar livros");
  }
}
//addBook(romancebooks) 
export  async function getAllBooks(req, res){
    try{
        const books = await db.collection("books").find().toArray()
       res.status(201).send(books)
    }catch(err){
      console.log(err, "Não há livros");
      res.status(500).send(err);
    }
    }