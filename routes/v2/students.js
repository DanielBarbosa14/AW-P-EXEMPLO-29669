const studentRouter = require('express').Router();
const controller = require('../../controllers/v2/student');
const authMiddleware = require('../../middlewares/auth');


studentRouter.use(authMiddleware);

studentRouter.get('/', controller.getAll); 
studentRouter.get('/:id', controller.getById); 
studentRouter.post('/create', controller.create); 
studentRouter.put('/update', controller.update); 
studentRouter.delete('/delete/:id', controller.delete);

module.exports = studentRouter;