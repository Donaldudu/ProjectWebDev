const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({

    rollNumber:{
        type: String,
        required: true,
    },
    studentName:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    // creditHour:{
    //     type: Number,
    //     require: true,
    // },
    CGPA:{
        type: Number,
        required: true,
    },
    SGPA:[{
        sem: String,
        gpa: Number,
}],
    batch:{
        year: Number,
        semType: String,
        // type: String,
        // required: false,
    },
    degree:{
        type: String,
        required:true,
    },
    section: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    address:{
        city: String,
        country: String,
        homePhone: String,
        home: String,

    },
    guardian:{
        type: String,
        required: true,
    }

}
)
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;