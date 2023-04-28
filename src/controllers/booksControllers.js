import {db} from "../database/database.connection.js"
import { adventureBooks } from "../models/adventureBooks.models.js";
import { selfHelpBooks } from "../models/ selfHelpBooks.models.js";
import { suspenseBooks } from "../models/suspenseBooks.models.js";

export async function addBook(book) {   
  console.log("book",book)
  try {
    const result = await db.collection("books").insertMany(book);
    console.log(`${result.insertedCount} livros adicionados ao banco de dados`);
  } catch (err) {
    console.log(err, "Erro ao adicionar livros");
  }
}
//addBook(adventureBooks) 
export  async function getAllBooks(req, res){
    try{
        const books = await db.collection("books").find().toArray()
       res.status(201).send(books)
    }catch(err){
      console.log(err, "Não há livros");
      res.status(500).send(err);
    }
    }