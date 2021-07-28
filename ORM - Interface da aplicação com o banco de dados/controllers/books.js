const { Book } = require('../models');
const rescue = require('express-rescue');

const getAll = rescue(async (_, res) => {
    try {
        const books = await Book.findAll();

        res.status(200).json(books);
    } catch (e) {
        res.status(500).json({ message: 'Algo deu errado' });
    }
})

const getById = rescue(async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByPk(id);

        res.status(200).json(book);
    } catch (e) {
        res.status(500).json({ message: 'Algo deu errado' });
    }
})

const create = rescue(async (req, res) => {
    try {
        const { title, author, pageQuantity = 0 } = req.body;

        console.log(title);
        const book = await Book.create({
            title,
            author,
            pageQuantity,
        });

        res.status(201).json(book);
    } catch (e) {
        res.status(500).json({ message: 'Algo deu errado' });
    }
})

const deleteById = rescue(async (req, res) => {
    try {
        const { id } = req.params;

        const book = await Book.findByPk(id);
        await book.destroy();

        res.status(200).json(book);
    } catch (e) {
        res.status(500).json({ message: 'Algo deu errado' });
    }
})

const updateById = rescue(async (req, res) => {
    try {
        const { id } = req.params;
        const { title, author, pageQuantity = 0 } = req.body;

        await Book.update({
            title,
            author,
            pageQuantity,
        }, { where: { id } });

        const book = await Book.findByPk(id);
        
        res.status(200).json(book);
    } catch (e) {
        res.status(500).json({ message: 'Algo deu errado' });
    }
})

module.exports = {
    deleteById,
    getAll,
    getById,
    updateById,
    create,
}