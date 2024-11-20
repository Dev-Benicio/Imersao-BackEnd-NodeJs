import express from 'express';
import { listaPosts } from '../controller/postController.js';

const router = (app) => {
  // Servidor Interpreta request JSON
  app.use(express.json());

  // Retorna todos os posts, formato JSON
  // Aula 03
  app.get('/posts', listaPosts);

  // // Retorna um post específico, formato JSON, pelo id
  // // Aula 02
  // app.get('/posts/memory/:id', (req, res) => {
  //   const index = getPost(req.params.id);
  //   res.status(200).json(posts[index]);
  // });

  // // Retorna todos os posts, formato JSON
  // // Aula 02
  // app.get('/posts/memory', (req, res) => {
  //   res.status(200).json(posts);
  // });

  // // Configurando o servidor para utilizar o protocolo HTTP
  // // Aula 01
  // app.get('/api', (req, res) => {
  //   res.status(200).send('Benício está na Imersão Back-End');
  // });

  // // Testando request post
  // app.post('/api', (req, res) => {
  //   res.status(200).send('Recebido');
  // });
};

export default router;