const vagasController = require('../controllers/vagas.controller');

module.exports = app => {

    app
        .route('/admin/dashboard/vagas')
        .get(vagasController.list)
        .post(vagasController.add)

    app
        .route('/admin/dashboard/vagas/:id')
        .get(vagasController.listById)
        .post(vagasController.update)

    app
        .route('/admin/dashboard/vagas/delete/:id')
        .get(vagasController.delete)
};