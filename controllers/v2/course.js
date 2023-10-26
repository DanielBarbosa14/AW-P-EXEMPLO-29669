const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

//return all courses
exports.getAll = async (req, res) => {
    try {
        //read all from database
        const response = await prisma.courses.findMany();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

//return course by his id (school id)
exports.getById = async (req, res) => {
    //get course id requested
    const id = req.params.id;
    try {
        //finds course by his id (id)
        const response = await prisma.course.findUnique({
            where: {
                id: id,
            },
        })
        //return course
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

//creates course
exports.create = async (req, res) => {
    //get requested course properties
    const { id, name, acronym, school } = req.body;
    try {
        //creates new course
        const course = await prisma.courses.create({
            data: {
                id: id,
                name: name,
                acronym: acronym,
                school: school,

            },
        })
        //return course created
        res.status(201).json(course)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//updates course
exports.update = async (req, res) => {
    const { id, name, acronym, school } = req.body;

    try {
        //find course to update their data
        const course = await prisma.courses.update({
            where: {
                id: id,
            },
            data: {
                name: name,
                acronym: acronym,
                school: school
            },
        })
        //return course updated
        res.status(200).json(course)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

//delete course by his id (course id)
exports.delete = async (req, res) => {
    //get course id requested
    const id = req.params.id;
    try {
        //delete course
        await prisma.courses.delete({
            where: {
                id: id,
            },
        })
        //just return ok
        res.status(200).send("ok");
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}