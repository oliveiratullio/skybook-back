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
    export async function searchOneProduct(req,res){
      const {search} = req.query
      try{
      const products = await db
      .collection('books')
      .find({tittle: {$regex: search,$options:'i'}})
      .toArray()
      if(!products) return res.status(404).send("Produto não encontrado")

      console.log(products)
      res.status(200).send(products)
      }catch(err){
        console.log(err)
        res.status(500).send("Erro interno do servidor ")

      }
    }