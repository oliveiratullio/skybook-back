import { addBook } from "../controllers/"
const imageRomanceUrls = [
  {url:"https://m.media-amazon.com/images/I/51jF2bhZoIL.jpg", title: "Romance 1"},
  {url:"https://m.media-amazon.com/images/I/41ib3umSTOL.jpg", title: "Romance 2"},
  {url:"https://photos.enjoei.com.br/livros-romance-81345693/828xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy80NTI5MDM2L2Q5ODA2ODRiNmUyZjFmM2ZkYmFiYTU5MGQ4YWU2NGU1LmpwZw", title: "Romance 3"},
  {url:"https://m.media-amazon.com/images/I/41emNKqEjOL.jpg",title:"Romance 4"},
  {url:"https://m.media-amazon.com/images/I/51vC+cWvzaL.jpg",title:"Romance 5"},
  
]

const romancebooks =[
  {  

    title: "Romance Fora de Época",
    price: 19.99,
    category: "romance",
    coverImageUrl: `${imageRomanceUrls[0].url}`
    
  },
  { 
    title: "Romance Supresa",
    price: 29.99,
    category:"romance",
    coverImageUrl: `${imageRomanceUrls[1].url}`
  },
  {
    title: "Para Sempre",
    price: 49.99,
    category: "romance",
    coverImageUrl: `${imageRomanceUrls[2].url}`

  },
   {
    title: "Romance para o CEO ",
    price: 19.99,
    category: "romance",
    coverImageUrl: `${imageRomanceUrls[3].url}`
    
   },
   {
   title: "Um Romance de Inverno",
   price: 19.99,
   category: "romance",
   coverImageUrl: `${imageRomanceUrls[4].url}`
   }
]
addBook(romancebooks)