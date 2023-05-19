const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Student = require("./Models/Student")
const jwt=require("jsonwebtoken")
require("dotenv").config();
const MONGODB_URL = process.env.URL;
const port = process.env.port;
app.use(express.json())
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
    const st=req.body;
    try {
        const student = new Student(st);
        const result = await student.save();
        // res.status(200).json(result);
    } catch(err) {
        console.log("errrrrrrrrrrrr")
        // res.status(404).json(err);
    }
    let token;
    try {
        token = jwt.sign(
            {rollNumber: st.rollNumber,studentName :st.studentName ,email: st.email },
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
                rollNumber:st.rollNumber,
                token: token
            },
        });
});