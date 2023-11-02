const router = require('express').Router();
const authRouter = require("./auth");
const studentRouter = require('./students');
const courseRouter = require('./courses');
const schoolRouter = require('./schools');

router.use('/auth', authRouter);
router.use('/students', studentRouter);
router.use('/courses', courseRouter);
router.use('/schools', schoolRouter);

module.exports = router;