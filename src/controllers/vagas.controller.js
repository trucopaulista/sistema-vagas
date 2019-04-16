const model = require('../models/model');
let api = {};

api.list = async (req, res) => {

    const categorias = await model.all('select * from categorias');

    res.render('pages/admin/vagas/vagas', { categorias });
};

api.add = async (req, res) => {

    console.log(req.body);
    const { titulo, descricao, categoria } = req.body;
    await model.insert(`INSERT INTO vagas (titulo, descricao, idCategoria) VALUES ('${ titulo }', '${ descricao }', ${ parseInt(categoria) })`);
    // await model.insert(`INSERT INTO vagas (titulo, descricao, idCategoria) VALUES ('${ titulo }', '${ descricao }', ${ parseInt(idCategoria) }) `);

    try {
        console.log('Vaga cadastrada');
        res.redirect('/admin/dashboard');
    } catch (error) {
        console.log(error);
    };
};

module.exports = api;