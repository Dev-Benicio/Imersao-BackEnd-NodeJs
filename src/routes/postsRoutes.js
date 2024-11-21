import express from 'express';
// import do multer
import { listaPosts, getPostById, createPost, teste, api } from '../controller/postController.js';

const router = (app) => {
  // Servidor Interpreta request JSON
    app.use(express.json());

  // Aula 04
  app.post("/posts", createPost);
  
  // Aula 04
  app.post("/upload", /* coloque o multer aqui, mas instale a dependencia */ );

  // Retorna todos os posts, formato JSON
  // Aula 03
    app.get('/posts', listaPosts);

  // Retorna um post específico, formato JSON, pelo id
  // Aula 02
    app.get('/posts/:id', getPostById);

  // Aula 01
    app.get('/teste', teste);

  // Testando request post
    app.post('/api', api);
};

export default router;