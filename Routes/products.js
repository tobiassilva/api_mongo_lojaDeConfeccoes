const express = require('express');
const router = express.Router();
const Products = require('../model/product');

//retornar todos os produtos
router.get('/', (req, res) => {
    Products.find({}, (err, data) => {
        if (err) return res.send({ error: 'Erro na consulta de produtos' });
        return res.send(data);
    });
});

//adicionar produtos
router.post('/insert', (req, res) => {
    const { codigo, descricao, valor, desconto } = req.body;

    if(!codigo || !descricao || !valor || !desconto) return res.send({ error: 'Dados Incompletos' });

    Products.create(req.body, (err, data) => {
        if(err) return res.send({ error: 'Erro ao inserir produtos!' });

        return res.send(data);
    })

});

module.exports = router;