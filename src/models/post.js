import getConnection from "../config/database.js";
import { ObjectId } from "mongodb";

const connect = await getConnection(process.env.LINK_CONNECT);

// Aula 05
export async function update(id, post) {
  const db = connect.db("database-imersao");
  const collection = db.collection("posts");
  const Obj = ObjectId.createFromHexString(id);
  return collection.updateOne({ _id: new ObjectId(Obj) }, { $set: post }, { upsert: false });
}


// Aula 04
export async function create(post) {
  const db = connect.db("database-imersao");
  const collection = db.collection("posts");
  return collection.insertOne(post);
}

// Faz connection com o banco de dados e retorna todos os posts
// Aula 03 
export async function getPosts() {
  const db = connect.db("database-imersao");
  const collection = db.collection("posts");
  return collection.find().toArray();
}

// Funçao que retorna o index do post
// Aula 02
export async function getPost(id) {
  const db = connect.db("database-imersao");
  const collection = db.collection("posts");
  const ObjectId = new ObjectId(id);
  const post = await collection.findOne({ _id: new ObjectId(id) });
  return post;
}