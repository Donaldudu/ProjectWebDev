import React, { useState } from 'react';
import axios from 'axios';
import './AddCourse.css';

const CourseForm = () => {
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [creditHour, setCreditHour] = useState('');
  const [courseType, setCourseType] = useState('');
  const [courseStatus, setCourseStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform authorization
    const token = 'your_auth_token'; // Replace with actual token

    // Prepare course data
    const courseData = {
      courseCode,
      courseName,
      creditHour,
      courseType,
      courseStatus,
    };

    try {
      const response = await axios.post('http://api.example.com/courses', courseData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
      );

      console.log(response.data); // Handle successful response
    } catch (error) {
      console.error(error); // Handle error
    }

    // Reset form fields
    setCourseCode('');
    setCourseName('');
    setCreditHour('');
    setCourseType('');
    setCourseStatus('');
  };

  return (
    <div className="course-form-container">
      <h2>Course Form</h2>
      <form onSubmit={handleSubmit} className="course-form">
        <label>
          Course Code:
          <input type="text" value={courseCode} onChange={(e) => setCourseCode(e.target.value)} />
        </label>
        <label>
          Course Name:
          <input type="text" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
        </label>
        <label>
          Credit Hour:
          <input type="text" value={creditHour} onChange={(e) => setCreditHour(e.target.value)} />
        </label>
        <label>
          Course Type:
          <input type="text" value={courseType} onChange={(e) => setCourseType(e.target.value)} />
        </label>
        <label>
          Course Status:
          <input type="text" value={courseStatus} onChange={(e) => setCourseStatus(e.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CourseForm;
