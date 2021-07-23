const express = require('express');
const app = express();


app.get('/', (_, res) => {
    res.send('Está vivo!!!')
});

app.listen(process.env.PORT || 3000);
// dá ruim definir uma porta no Heroku... tem que passar o process.env.PORT