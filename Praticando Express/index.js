const express = require('express');
const TokenGenerator = require('uuid-token-generator');

const users = [
    {
        id: 2,
        user: 'antonio',
        comments: ["Hoje o dia está maneiro!", "Agora não está muito"]
    },
    {
        id: 3,
        user: "rodrigo",
        comments: ["To aqui também", "Agora não tô"]
    }
];
const app = express();

app.use(express.json());

function validaEmail(req, res, next) {
    const email = req.body.email;
    const regex = /\S+@\S+\.\S+/;
    if (regex.test(String(email).toLowerCase())) return next();
    return res.send('email or password is incorrect');
}

function validaSenha(req, res, next) {
    const senha = req.body.senha;
    if (!senha || senha.length < 5 || senha.length > 8) return res.send('email or password is incorrect');
    return next();
}

function geraToken(req, res, next) {
    const tokgen = new TokenGenerator();
    res.send(tokgen.generate().slice(0, 12));
    return next();
}

app.get('/comments', (req, res) => {
    const filter = req.query.filter.toLowerCase();

    const comments = users.reduce((acc, user) => {
        return [...user.comments, ...acc];
    }, []);

    if (!filter) return res.send(comments);

    return res.status(200).send(comments
        .filter(comment => comment
            .toLowerCase()
            .includes(filter)
        )
    );
});

app.post('/btc/price', (req, res) => {
    const token = req.header('Authorization');
    if (token.length !== 12 || !(/[A-Za-z0-9]/).test(String(token))) return res.send('invalid token');
    res.send('OK');
})

app.listen(3333, () => console.log('Servidor'));