const vagasController = require('../controllers/vagas.controller');

module.exports = app => {

    app
        .route('/admin/dashboard/vagas')
        .get(vagasController.list)
        .post(vagasController.add)
};