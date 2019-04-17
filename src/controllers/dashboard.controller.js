const model = require('../models/model');

let api = {};

api.list = async (req, res) => {

    const categorias = await model.all('select * from categorias');
    const vagas      = await model.all('select * from vagas');
    
    res.render('pages/admin/dashboard/dashboard', { categorias, vagas });
};

module.exports = api;