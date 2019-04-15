const port      = process.env.PORT || 3001;

module.exports = app => {

    app.listen(port, () => {
    
        if(port === 3001) {
            console.log(`Servidor local rodando em http://localhost:${ port }`);
        };
        
    })
};
