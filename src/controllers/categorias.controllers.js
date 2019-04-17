const model = require('../models/model');
let api     = {};

api.list = async (req, res) => {

    res.render('pages/admin/categorias/categoria');
};

api.add = async (req, res)  => {

    console.log(req.body);
    const { titulo } = req.body;
    
    await model.insert(`INSERT INTO categorias (name) VALUES ('${ titulo }') `)
    
    try {
        
        console.log('Categoria cadastrada');
        res.redirect('/admin/dashboard');
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = api;