const studentsRouter = require('express').Router();
const controller = require('../controllers/student');

studentsRouter.get('/', controller.getAll);
studentsRouter.get('/:id', controller.getById);
studentsRouter.post('/create', controller.create);
studentsRouter.put('/update', controller.update);
studentsRouter.delete('/delete', controller.delete);

module.exports = studentsRouter;