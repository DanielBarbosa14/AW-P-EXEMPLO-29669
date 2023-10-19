const router = require('express').Router();
const studentRouter = require('./students');
const coursesRouter = require("./courses");
const schoolsRouter = require('./schools');

router.use('/students', studentRouter);
router.use('/courses', coursesRouter);
router.use('/schools', schoolsRouter);

module.exports = router;