const loginController = require('../controllers/login.controller');

module.exports = app => {

    app
        .route('/admin')
        .get(loginController.list)
        .post(loginController.login)
}