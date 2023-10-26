const schoolRouter = require('express').Router();
const controller = require('../../controllers/v2/school');

schoolRouter.get('/', controller.getAll); 
schoolRouter.get('/:id', controller.getById); 
schoolRouter.post('/create', controller.create); 
schoolRouter.put('/update', controller.update); 
schoolRouter.delete('/delete/:id', controller.delete);

module.exports = schoolRouter;