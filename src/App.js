import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavHead from "./components/Nav";
import Dashboard from './pages/Common/Dashboard';
import Login from './pages/Patient/login'
import DoctorPrescription from './pages/Doctor/DoctorPrescription';
import DownloadPressciption from './pages/Patient/DownloadPressciption';
import PatientDashboard from './pages/Patient/PatientDashboard'
import PatientPage from './pages/Patient/PatientPage';
import PatientMenu from './pages/Patient/PatientMenu';

function App() {
  return (
    <div>
      <Router>
        <NavHead/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/patient_login" element={<Login></Login>}></Route>
          <Route path="/patientLogin"/>
          <Route path="/add-prescription" element={<DoctorPrescription/>}/>
          <Route path="/showPrescription" element={<DownloadPressciption/>}/>
          <Route path="/PatientPage" element={<PatientPage/>}/>
          <Route path="/PatientDashboard" element={<PatientMenu/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
