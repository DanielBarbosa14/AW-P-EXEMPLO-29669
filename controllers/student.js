const fs = require('fs');

//return all students
exports.getAll = async (req, res) => {
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //returns students array
    return res.send(data.students);
}

//return student by his id (student id)
exports.getById = async (req, res) => {
    //get student id requested
    const id = req.params.id;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //finds student by his id
    const student = data.students.filter(student => student.id == id);
    //return student
    res.send(student);
}

//creates student
exports.create = async (req, res) => {
    //get requested student properties
    const {id, number, name, city, birthday, courses } = req.body;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //add to students array
    data.students.push(req.body);
    //add to students array
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return new student
    return res.status(201).send(req.body);
}

//updates student
exports.update = async (req, res) => {
    const { id, number, name, city, birthday, courses } = req.body;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8");
    //parse to json
    const data = JSON.parse(datajson);
    //find student to update
    const student = data.students.find(student => student.id == id);
    //update properties
    student.id = id;
    student.number = number;
    student.name = name;
    student.city = city;
    student.birthday = birthday;
    student.courses =courses;
    //update local database
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return updated student
    return res.send({id, number, name, city, birthday, courses });
}

//delete student by his id (student id)
exports.delete = async (req, res) => {
    //get student id requested
    const id = req.params.id;
    //read local data json file
    const datajson = fs.readFileSync("data/local/data.json", "utf-8"); 
    //parse to json
    const data = JSON.parse(datajson);
    //find student to delete
    const student = data.students.filter(student => student.id == id);
    //delete student
    data.students.splice(student, 1);
    //update local database
    fs.writeFileSync('data/local/data.json', JSON.stringify(data));
    //return ok
    return res.status(200).send("ok");
}