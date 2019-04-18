const model     = require('../models/model');
const jwt       = require('jsonwebtoken');
const authCecret= require('../config/auth');

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

            const token = jwt.sign(
                { id: user.id }
                , authCecret.secret
                , { expiresIn: 86400 }
            );

            console.log('autenticado');
            res.set('x-access-token', token);
            res.redirect('/admin/dashboard');
            res.json({ user: user.login, token });
        } else {
            console.log('Login ou senha inválidos');
            res.json({ fail: 'Login ou senha inválidos' });
        }
    } catch (error) {
        console.log(error);
        res.json(error)
    }
    
};

api.requireToken = (req, res, next) => {

    const token = req.headers['x-access-token'];
    
    if(!token) {
        res.status(401).json({ fail: 'Token inválido' });
        return;
    }

    jwt.verify(token, authCecret.secret, (erro, decoded) => {

        if(erro) {
            console.log('Token inválido');
            res.status(401).json({ fait: 'Sem permissão de acesso' });
            return;
        }

        req.user = decoded.id;
        next();
    })
}

module.exports = api;