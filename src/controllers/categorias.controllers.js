const model = require('../models/model');
let api     = {};

api.list = async (req, res) => {

    res.render('pages/admin/categorias/categoria');
};

api.listById = async (req, res) => {

    const { id } = req.params;
    const categoria = await model.get(`SELECT * FROM categorias WHERE id = ${ id }`);

    try {
        
        res.render('pages/admin/categorias/categoria-editar', { categoria });
    } catch (error) {
        console.log(error);
    }

}

api.add = async (req, res) => {

    console.log(req.body);
    const { titulo } = req.body;
    
    await model.insert(`INSERT INTO categorias (name) VALUES ('${ titulo }') `)
    
    try {
        
        console.log('Categoria cadastrada');
        res.redirect('/admin/dashboard');
    } catch (error) {
        console.log(error);
    }
    
};

api.update = async (req, res) => {

    console.log(req.body);
    
    const { name } = req.body;
    const { id } = req.params;
    
    await model.update(`UPDATE categorias SET name = '${ name }' WHERE id = ${ id } `);

    try {
        console.log('Categoria atualizada');
        res.redirect('/admin/dashboard');
    } catch (error) {
        console.log(error);
    }
    
};

module.exports = api;