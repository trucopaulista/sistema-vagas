const express   = require('express');
const consign   = require('consign');
const app       = express();

consign({ cwd: 'src' })
    .include('config')
    .then('models')
    .then('controllers')
    .then('routes')
    .into(app)