import {db} from "../database/database.connection.js"
//adicionando e pegando os livros pela api
export async function addBook(books) {   
  try {
    const result = await db.collection("books").insertMany(books);
    console.log(`${result.insertedCount} livros adicionados ao banco de dados`);
  } catch (err) {
    console.log(err, "Erro ao adicionar livros");
  }
}
export async function getAllBooks(req, res){
 
    try{
        const books = await db.collections("books").find()
       res.status(201).send(books)
    }catch(err){
      console.log(err, "não ha livros")
    }
    }