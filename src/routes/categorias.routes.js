const categoriaController = require('../controllers/categorias.controllers');

module.exports = app => {

    app
        .route('/admin/dashboard/admin/dashboard/categorias')
        .get(categoriaController.list)
}