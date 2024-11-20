import { getPosts, getPost} from "../models/post.js";

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