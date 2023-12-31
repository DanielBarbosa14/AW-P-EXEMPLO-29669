const coursesRouter = require('express').Router();
const controller = require('../../controllers/v1/course');

coursesRouter.get('/', controller.getAll);
coursesRouter.get('/:id', controller.getById);
coursesRouter.post('/create', controller.create);
coursesRouter.put('/update', controller.update);
coursesRouter.delete('/delete', controller.delete);

module.exports = coursesRouter;