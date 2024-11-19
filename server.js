import express from 'express';

// Array de posts
const posts = [
    { id: 1, descricao: 'zorao', imagem: 'https://th.bing.com/th/id/OIP.Zgt312M3XYLuPfebe_DnoQHaEK?rs=1&pid=ImgDetMain' },
    { id: 2, descricao: 'gato', imagem: 'https://...' },
    { id: 3, descricao: 'paisagem', imagem: 'https://...' }
];

// Criação do servidor
const app = express();

// Configuração da API para utilizar JSON
app.use(express.json());

// Conexão com o servidor
// Aula 01
app.listen(3000, () => {
    console.log('Benício, o Rei chegou!!');
});

// Configurando o servidor para utilizar o protocolo HTTP
// Aula 01
app.get('/api', (req, res) => {
    res.status(200).send('Benício está na Imersão Back-End');
});

// Retorna todos os posts, formato JSON
// Aula 02
app.get('/posts', (req, res) => {
    res.status(200).json(posts);
});

// Funçao que retorna o index do post
// Aula 02
function getPost(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

// Retorna um post específico, formato JSON, pelo id
// Aula 02
app.get('/posts/:id', (req, res) => {
    const index = getPost(req.params.id);
    res.status(200).json(posts[index]);
});

// Testando request post
app.post('/api', (req, res) => {
    res.status(200).send('Recebido');
});