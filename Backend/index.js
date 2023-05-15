const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Student = require("./Models/Student")
require("dotenv").config();
const MONGODB_URL = process.env.URL;
const port = process.env.port;

mongoose
    .connect(MONGODB_URL)
    .then(()=>{
        console.log("Connected to MongoDB");
    })
    .catch((err)=>{
        console.log(err);
    })

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.listen(port)


app.post("/signup", async (req, res, next) => {
    const { CGPA, SGPA,rollNumber, studentName, password, batch, degree, section, status, phone, gender, email, address, guardian } = req.body;
    const newStudent = {
        CGPA : 0,
        SGPA  : null,
        rollNumber,
        studentName,
        password,
        batch,
        degree,
        section,
        status,
        phone,  
        gender,
        email,
        address,
        guardian,
    };
    console.log(newUser)
    try {
        const student = new Student(newStudent);
        const result = await student.save();
        res.status(200).json(result);

    } catch(err) {
        res.status(404).json(err);
    }
    let token;
    try {
        token = jwt.sign(
            {rollNo: newStudent.rollNumber,name :newStudent.studentName ,email: newStudent.email },
            process.env.SecretKey,
            { expiresIn: "1h" }
        );
    } catch (err) {
        const error = new Error("Error! Something went wrong.");
        next(error);
    }

    res
        .status(201)
        .json({
            success: true,
            data: {
                rollno: newStudent.rollNumber,
                email: newStudent.email,
                token: token
            },
        });
});