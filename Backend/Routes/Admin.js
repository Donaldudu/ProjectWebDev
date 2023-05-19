const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const Student=require("../Models/Student")
const Course=require("../Models/Course")

router.post("/signup", async (req, res, next) => {
    const st=req.body;
    try {
        const student = new Student(st);
        const result = await student.save();
    } catch(err) {
        console.log("errrrrrrrrrrrr")
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


router.post('/AdminLogin',(req,res)=>{
    const {email,password}=req.body;
    if(email=="admin" && password=="admin"){
        res.status(201).send({success:true})
    }
    else{
        res.status(404).send("Wrong email or password")
    }

})

router.get('/getStudents',(req,res)=>{
    Student.find()
    .then(sArray=>{
        res.json(sArray)
    })
    .catch(err=>{
        console.log(err)
    })
})


router.post('/studentUpdate', async(req,res)=>{
 const {rollNumber,studentName,password,
CGPA,SGPA,batch,degree,section,status,phone
,gender,email,address,gaurdian,} = req.body 
   

   const student = await Student.findOne({rollNumber:rollNumber})
   student.rollNumber=rollNumber; 
   student.studentName=studentName;
   student.password=password;
   student.CGPA=CGPA;
   student.SGPA=SGPA;
   student.batch=batch;
   student.degree=degree;
   student.section=section;
   student.status=status;
   student.phone=phone;
   student.gender=gender;
   student.email=email;
   student.address=address;
   student.gaurdian=gaurdian;


   await student.save()

})

router.post('/AddCourses', (req, res) => {
    const newCourse=new Course(req.body)
    newCourse.save().then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
  });

  router.delete('/DeleteCourses', (req, res) => {
    const courseId = req.body.courseCode;
    Course.deleteOne({courseCode:courseCode}).then((result)=>{
        res.status(200).json(result)
    }).catch((err)=>{
        res.status(404).json(err)
    })
  });


module.exports = router