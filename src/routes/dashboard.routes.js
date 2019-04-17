const dashBoardController = require('../controllers/dashboard.controller');

module.exports = app => {

    app
        .route('/admin/dashboard')
        .get(dashBoardController.list)
};