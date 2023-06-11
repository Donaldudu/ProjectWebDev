import StudentForm from "./RegisterStudent";
import Navbar from "./Navbar";
import LoginAdmin from "./LoginAdmin";
import ViewFeedbacks from "./ViewFeedbacks";
import AddInstructor from "./RegisterInstructor";
import CardsContainer from "./User"
import CourseForm from "./AddCourse";
import { Routes , Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path = "/LoginAdmin" element = {<LoginAdmin/>}/> 
      <Route path = "/ViewFeedbacks" element={<ViewFeedbacks/>}/>
      <Route path = "/AddStudent" element={<StudentForm/>}/>
      <Route path="/AddInstructor" element = {<AddInstructor/>}/>
      <Route path = "/Course" element  = {<CourseForm/>}/>
      <Route path = "/User" element={<CardsContainer/>}/>
      
      {/* <Route path = "/ViewFeedbacks" element={<ViewFeedbacks/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
