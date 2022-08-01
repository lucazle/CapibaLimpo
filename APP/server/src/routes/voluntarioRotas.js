const voluntarioController = require ('../app/controllers/voluntarioController');

module.exports = (app) => {
    app.post('/usersignup', voluntarioController.post);
    app.put('/user/useratualizacao/:id', voluntarioController.put);
    app.delete('/user/userdeletar/:id', voluntarioController.delete);
    app.get('/voluntario', voluntarioController.get);
    app.get('/voluntario/:id', voluntarioController.getById);
}