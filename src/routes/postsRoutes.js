import express from 'express';
import { listaPosts, getPostById, teste, api } from '../controller/postController.js';

const router = (app) => {
  // Servidor Interpreta request JSON
    app.use(express.json());

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