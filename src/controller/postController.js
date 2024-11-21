import { getPosts, getPost, create} from "../models/post.js";
import fs from 'fs';

// Aula 04
export async function createPost(req, res){
  const post = req.body;
  try {
    const createPost = await create(post);
    res.status(200).json(postCriado);  
  } catch(erro) {
      console.error(erro.message);
      res.status(500).json({"Erro":"Falha na requisição"})
  }
}

// Aula 04
export async function uploadImg(req, res){
  const new post = {
      descricao: '',
      imgUrl: req.file.originalname,
      alt: ''
  };
  
  try {
    const postCriado = await criarPost(novoPost);
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        fs.renameSync(req.file.path, imagemAtualizada)
    res.status(200).json(postCriado);  
  } catch(erro) {
    console.error(erro.message);
    res.status(500).json({"Erro":"Falha na requisição"})
    }
}

export async function listaPosts(req, res) {
  const posts = await getPosts();
  res.status(200).json(posts);
}

// Aula 02
export async function getPostById(req, res) {
  const index = await getPost(req.params.id);
  res.status(200).json(index);
}

// Aula 01
export async function teste(req, res) {
  res.status(200).send('Benício está na Imersão Back-End');
}

export async function api(req, res) {
  res.status(200).send('Recebido');
}