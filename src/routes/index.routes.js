const indexController = require('../controllers/index.controller');

module.exports = app => {

    app
        .route('/')
        .get(indexController.list)
}