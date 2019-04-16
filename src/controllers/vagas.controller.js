const model = require('../models/model');
let api = {};

api.list = async (req, res) => {

    const categorias = await model.all('select * from categorias');

    res.render('pages/admin/vagas/vagas', { categorias });
};

api.add = async (req, res) => {

    const { titulo, descricao, categoria } = req.body;

    await model.insert(`INSERT INTO vagas (titulo, descricao, idCategoria) VALUES ('${ titulo }', '${ descricao }', ${ parseInt(categoria) })`);

    try {
        console.log('Vaga cadastrada');
        res.redirect('/admin/dashboard');
    } catch (error) {
        console.log(error);
    };
};

api.listById = async(req, res) => {

    const { id }        = req.params;    
    const categorias    = await model.all('select * from categorias');
    const vaga          = await model.get(`select * from vagas WHERE id = ${ id }`);

    res.render('pages/admin/vagas/vagas-editar', { categorias, vaga });
}

api.update = async (req, res) => {

    console.log(req.body);
    const { id } = req.params;
    const { titulo, descricao, categoria } = req.body;

    await model.update(`UPDATE vagas SET titulo = '${ titulo }', descricao = '${ descricao }', idCategoria = ${ parseInt(categoria) } WHERE id = ${ id } `);

    try {
        
        console.log('Vaga atualizada');
        res.redirect('/admin/dashboard');
    } catch (error) {
        console.log(error);
    }
    
};

module.exports = api;