import React, { useState } from 'react';
import './RegisterInstructor.css'
import axios from "axios"
const InstructorForm = () => {
  const [Id, setId] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [instructorName, setinstructorName] = useState('');
  const [courseTeaching, setcourseTeaching] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');

 

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data here
    let st={
      Id,
      email,
      password,
      instructorName,
      courseTeaching,
      phone,
      gender,
      address,
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
      
    <form onSubmit={handleSubmit} className="instructor-form">
      <label>
        Id:
        <input
          type="text"
          value={Id}
          onChange={(e) => setId(e.target.value)}
        />
      </label>
      <br />
      <label>
        email:
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
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
        Instructor Name:
        <input
          type="text"
          value={instructorName}
          onChange={(e) => setinstructorName(e.target.value)}
        />
      </label>
     
      <br />
      <label>
        Course Teaching:
        <input
          type="text"
          value={courseTeaching}
          onChange={(e) => setcourseTeaching(e.target.value)}
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
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <br />
      
      
      
      <button type="submit">Submit</button>
    </form>
          </div>
  );
};

export default InstructorForm;
