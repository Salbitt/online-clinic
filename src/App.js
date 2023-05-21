import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Pagenotfound from "./pages/Pagenotfound";
import SignIn from './pages/LoginSign/SignInPage'
import Patient from './pages/Patient/Profile'
import Doctor from './pages/Doctor/Profile'
import Operator from './pages/Operator/ToDoList'
import Frontpage from './pages/Admin/Frontpage'
import Appointments from "./components/Appointments";
import LogIn from "./pages/LoginSign/LoginPage";
import AppointmentList from "./components/AppointmentList";
import PatientDetails from "./pages/Admin/PatientDetails";
import DoctorDetails from "./pages/Admin/DoctorDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="/signin" element={<SignIn/>}></Route>
          <Route path="/admin-front" element={<Frontpage/>}></Route>
        
         
          <Route path="/operator-front" element={<Operator/>}></Route>
          <Route path="/doctor-front" element={<Doctor/>}></Route>
          <Route path="/patient-front" element={<Patient/>}></Route>
          <Route path="/appointments" element={<Appointments/>}></Route>
          <Route path="/appointments-list" element={<AppointmentList/>}></Route>
          <Route path="/login" element={<LogIn/>}></Route>
          <Route path="/patient-details" element={<PatientDetails/>}></Route>
          <Route path="/doctor-details" element={<DoctorDetails/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;