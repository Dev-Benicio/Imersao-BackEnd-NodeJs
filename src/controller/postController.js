import getPosts from "../models/post.js";

export async function listaPosts(req, res) {
  const posts = await getPosts();
  res.status(200).json(posts);
}
