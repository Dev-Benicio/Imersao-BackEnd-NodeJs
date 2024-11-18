import express from 'express';

const app = express();
app.listen(3000, () => {
    console.log('Benício, o Rei chegou!!');
});

app.get('/api', (req, res) => {
    res.status(200).send('Benício está na Imersão Back-End');
});

app.post('/api', (req, res) => {
    res.status(200).send('Recebido');
});