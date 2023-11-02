const coursesRouter = require('express').Router();
const controller = require('../../controllers/v2/course');
const authMiddleware = require('../../middlewares/auth');


coursesRouter.use(authMiddleware);


coursesRouter.get('/', controller.getAll); 
coursesRouter.get('/:id', controller.getById); 
coursesRouter.post('/create', controller.create); 
coursesRouter.put('/update', controller.update); 
coursesRouter.delete('/delete/:id', controller.delete);

module.exports = coursesRouter;