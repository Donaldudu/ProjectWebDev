import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "../src/Table.css";
import 'bootstrap/dist/css/bootstrap.css';


const OneFeedback=(props)=>{
  return(
    <tr>
        <td>{props.rollNo}</td>
        <td>{props.problem}</td>
        <td>{props.feedback}</td>
    </tr>
  )
}

const ViewFeedbacks = () => {
  const [allfeeds, setfeeds] = useState([{}]);
  const options = {
    url: "http://localhost:3001/getfeedbacks",
    method: "GET",
  };

  useEffect(()=>{
    axios(options)
    .then((response) => {
      console.log(response.data)
      const a = response.data;
      setfeeds(a);
    })
    .catch((err) => {
      console.log(err);
    });
  },[])

  function Show(obj) {
    return <OneFeedback rollNo={obj.rollNo} feedback={obj.feedback} problem={obj.problem} />;
  }

  return (
    <>
    {/* ------------------------------------- */}
      <h1 id='title'>Student Feedbacks</h1>
      <div className="tablebox">

      <table className="table table-stripped-column">
        <thead>
          <tr>

          <th>Student RollNumber</th>
          <th>Problem</th>
          <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {allfeeds.map(Show)}
        </tbody>
      </table>
      </div>
    </>
  );
};

export default ViewFeedbacks;
