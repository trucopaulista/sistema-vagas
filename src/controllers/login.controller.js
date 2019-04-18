const model = require('../models/model');
let api     = {};

api.list = (req, res) => {

    res.render('pages/admin/login/login');
}

api.login = async (req, res) => {

    console.log('Realizando o login');
    console.log(req.body);
    
}

module.exports = api;