const router = require('express').Router();
const studentRouter = require('./students');
const courseRouter = require('./courses');
const schoolRouter = require('./schools');

router.use('/students', studentRouter);
router.use('/courses', courseRouter);
router.use('/schools', schoolRouter);

module.exports = router;