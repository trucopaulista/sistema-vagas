const model = require('../models/model');
let api     = {};

api.list = (req, res) => {

    console.log('Tela de login');
    res.render('pages/admin/login/login');
}

api.login = async (req, res) => {

    console.log(req.body);

    const { login, password } = req.body;
    const user =  await model.get(`select * from admins WHERE login = '${ login }' and password = '${ password }' `);
    
    try {
    
        if(user) {
            
            console.log('autenticado');
            res.redirect('/admin/dashboard');
            res.json({ auth: user.login });
        } else {
            console.log('Login ou senha inválidos');
            res.json({ fail: 'Login ou senha inválidos' });
        }
    } catch (error) {
        console.log(error);
        res.json(error)
    }
    
}

module.exports = api;