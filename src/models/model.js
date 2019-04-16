const sqlite        = require('sqlite');
const path          = require('path');
const dbConnection  = sqlite.open(path.resolve(__dirname, '..', '..', 'banco.sqlite'), { Promise });
// const dbConnection  = sqlite.open('banco.sqlite', { Promise });

let api = {};

api.create = async params => {

    const db = await dbConnection;
    await db.run(params);

    try {
        
        console.log('Tabela criada');
    } catch (error) {
        console.log(error);
    }
};

api.insert = async params => {
    
    const db = await dbConnection;
    await db.run(params);

    try {
        
        console.log('Dados inseridos');
    } catch (error) {
        console.log(error);
    }
    
};

api.update = async params => {
    
    const db = await dbConnection;
    await db.run(params);

    try {
        console.log('Dados alterados');
    } catch (error) {
        console.log(error);
    }

};

api.get = async params => {
    
    const db = await dbConnection;
    const info = await db.get(params);

    try {
        console.log('Informação encontrada');
        return info;
    } catch (error) {
        console.log(error);
    }   
}

api.all = async params => {

    const db = await dbConnection;
    const all = await db.all(params);

    try {
        console.log('Dados retornados');
        return all;
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = api;

// create 'CREATE TABLE IF NOT EXISTS categorias (id INTEGER PRIMARY KEY, name TEXT)'
// insert `INSERT INTO categorias (name) VALUES ('Front-End')`
// update 'UPDATE vagas SET titulo = "Front-end" WHERE id = 2'