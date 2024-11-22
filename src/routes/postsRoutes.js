import express from 'express';
// import do multer
import multer from 'multer';
import { listaPosts, getPostById, createPost, updatePost, uploadImg, teste, api } from '../controller/postController.js';
import cors from 'cors';

const corsOptions = {
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200,
}
// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Especifica o diretório para armazenar as imagens enviadas
    cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo por simplicidade
    cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
  }
});

const upload = multer({ storage: storage });
const router = (app) => {
  // Servidor Interpreta request JSON
    app.use(express.json());
    app.use(cors(corsOptions));

    // Aula 05
    // Atualiza um post
    app.put("/posts/:id", updatePost);


  // Aula 04
  app.post("/posts", createPost);
  
  // Aula 04
  // Rota para upload de imagens (assumindo uma única imagem chamada "imagem")
  app.post("/upload", upload.single('imagem'), uploadImg); /* coloque o multer aqui, mas instale a dependencia */

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