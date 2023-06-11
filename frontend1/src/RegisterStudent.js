import React, { useState } from 'react';
import './RegisterStudent.css'
import axios from "axios"
const StudentForm = () => {
  const [rollNo, setRollNo] = useState('');
  const [studentName, setStudentName] = useState('');
  const [courseTaken, setCourseTaken] = useState('');
  const [batch, setBatch] = useState('');
  const [semester, setSemester] = useState('');
  const [degree, setDegree] = useState('');
  const [section, setSection] = useState('');
  const [status, setStatus] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [guardian, setGuardian] = useState('');
 

  const handleSubmit = (e) => {
    e.preventDefault();
    let st={
      rollNo,
      studentName,
      batch,
      semester,
      degree,
      section,
      status,
      phone,
      gender,
      email,
      password,
      address,
      guardian,     
    }

    axios({
      url:"http://localhost:3001/signup",
      method:"POST",
      data:st
    }).then((res)=>{
      
      console.log(res);
      alert("Student added Successfully")
    }).catch(err=>{
      console.log(err)
    })







  };

  return (
    <div className='login-box'>
      
    <form onSubmit={handleSubmit} className="student-form">
      <label>
        Roll Number:
        <input
          type="text"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
        />
      </label>
      <br />
      <label>
        Student Name:
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
      </label>

      <br />
      <label>
        Batch:
        <input
          type="text"
          value={batch}
          onChange={(e) => setBatch(e.target.value)}
        />
      </label>
     
      <br />
      <label>
        Semester:
        <input
          type="text"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          />
      </label>
      <br />
      <label>
        Degree:
        <input
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        />
      </label>
      <br />
      <label>
        Section:
        <input
          type="text"
          value={section}
          onChange={(e) => setSection(e.target.value)}
        />
      </label>
      <br />
      <label>
        Status:
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </label>
      <br />
      <label>
        Phone:
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          />
      </label>
      <br />
      <label>
        Gender:
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          />
      </label>
      <br />
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <br />
      <label>
        Guardian:
        <input
          type="text"
          value={guardian}
          onChange={(e) => setGuardian(e.target.value)}
          />
      </label>
      <br />
      
      
      <button type="submit">Submit</button>
    </form>
          </div>
  );
};

export default StudentForm;