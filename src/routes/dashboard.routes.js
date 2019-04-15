const dasboardController = require('../controllers/dashboard.controller');

module.exports = app => {

    app
        .route('/admin/dashboard')
        .get(dasboardController.list)
};