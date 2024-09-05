const Student = require("../models/studentModel");

exports.getAllStudents = (req, res) =>{
    const students = Student.findAll();
    res.render("students", {students});
};



exports.createStudent = (req, res) =>{
    //parámetros que me enviará el usuario
    const {id, name} = req.body;
    //Ya hay una instancia con valores de la clase estudiante
    const newStudent = new Student(id, name);
    Student.createStudent(newStudent);
    res.redirect("/students"); 
}

exports.removeStudentById=(req,res)=>{
    const {id}=req.body
    Student.removeStudent(id);
    res.redirect("/students")
}

exports.findStudentById=(req,res)=>{
    const {id}=req.body
    const   studentsFound = Student.findStudent(id);
    res.render("filterStudent", {studentsFound});
}