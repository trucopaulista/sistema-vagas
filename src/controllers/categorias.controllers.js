const model = require('../models/model');
let api     = {};

api.list = async (req, res) => {

    res.render('pages/admin/categorias/categoria');
};

module.exports = api;