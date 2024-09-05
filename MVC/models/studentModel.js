//Arreglo que almacenará los estudiantes
let students = [];
let  studentsFound = [];



class Student {

    //constructor de la clase
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    //Método para retornar todos los estudiantes
    static findAll(){
        return students;
      
    }


    //Método para crear estudiantes
    static createStudent(student){
        students.push(student);
    }
  

    //Método para remover el estudiantes
    static removeStudent(id){
        students= students.filter(student => student.id !== id)
    }
            


    static findStudent(id){
        studentsFound= students.filter((student) => student.id == id)
    return studentsFound
      
        
    }


}
//exportamos a la clase estudiante
module.exports = Student;
