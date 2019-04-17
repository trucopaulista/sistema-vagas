const categoriaController = require('../controllers/categorias.controllers');

module.exports = app => {

    app
        .route('/admin/dashboard/categorias')
        .get(categoriaController.list)
        .post(categoriaController.add)

    app
        .route('/admin/dashboard/categoria/editar/:id')
        .get(categoriaController.listById)
        .post(categoriaController.update)
}