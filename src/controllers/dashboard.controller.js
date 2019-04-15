const model = require('../models/model');

let api = {};

api.list = async (req, res) => {

    res.render('pages/admin/dashboard/dashboard');
}

module.exports = api;