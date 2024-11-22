import express from 'express';
import router from './src/routes/postsRoutes.js';

const app = express();
app.use(express.static('uploads'));
router(app);

// Conexão com o servidor
app.listen(3000, () => {
    console.log('Benício, o Rei chegou!!');
});