import {db} from "../database/database.connection.js"
//adicionando e pegando os livros pela api
export async function addBook() {   
  try {
    const result = await db.collections("books").insertMany(books);
    console.log(`${result.insertedCount} livros adicionados ao banco de dados`);
  } catch (err) {
    console.log(err, "Erro ao adicionar livros");
  }
}
//addBook()
export async function getAllBooks(req, res){
 
    try{
        const books = await db.collections("books").find().toArray()
       res.status(201).send(books)
    }catch(err){
      console.log(err, "Não há livros");
      res.status(500).send(err);
    }
    }