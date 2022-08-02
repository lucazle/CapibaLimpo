const voluntarioController = require ('../app/controllers/voluntarioController');

module.exports = (app) => {
    app.post('/cadastro', voluntarioController.post);
    app.put('/useratualizacao/:id', voluntarioController.put);
    app.delete('/user/userdeletar/:id', voluntarioController.delete);
    app.get('/voluntarios', voluntarioController.get);
    app.get('/voluntario/:id', voluntarioController.getById);
}