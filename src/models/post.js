import getConnection from "../config/database.js";
const connect = await getConnection(process.env.LINK_CONNECT);

// Faz connection com o banco de dados e retorna todos os posts
// Aula 03 
export default async function getPosts() {
  const db = connect.db("database-imersao");
  const collection = db.collection("posts");
  return collection.find().toArray();
}

// // Funçao que retorna o index do post
// // Aula 02
// export default function getPost(id) {
//   return posts.findIndex((post) => {
//     return post.id === Number(id);
//   });
// }