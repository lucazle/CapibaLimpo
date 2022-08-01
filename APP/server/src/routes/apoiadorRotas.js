const apoiadorController = require ('../app/controllers/apoiadorController');

module.exports = (app) => {
    app.post('/forms', apoiadorController.post);
    app.put('/apoiador/:id', apoiadorioController.put);
    app.delete('/apoiadorio/:id', apoiadorController.delete);
    app.get('/apoiador', apoiadorController.get);
    app.get('/apoiador/:id', apoiadorController.getById);
}