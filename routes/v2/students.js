const studentRouter = require('express').Router();
const controller = require('../../controllers/v2/student');


studentRouter.get('/', controller.getAll); 
studentRouter.get('/:id', controller.getById); 
studentRouter.post('/create', controller.create); 
studentRouter.put('/update', controller.update); 
studentRouter.delete('/delete/:id', controller.delete);

module.exports = studentRouter;