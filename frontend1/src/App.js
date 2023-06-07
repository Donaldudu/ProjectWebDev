import StudentForm from "./RegisterStudent";
import Navbar from "./Navbar";
import AdminLogin from "./LoginAdmin";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <StudentForm/>
      <AdminLogin/>
    </div>
  );
}

export default App;
