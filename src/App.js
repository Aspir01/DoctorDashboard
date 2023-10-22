import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Menu from './components/Menu/Menu';
import Main from './components/Main/Main';
import Finance from './components/Menu Items/Finance/Finance';
import WorkerList from './components/Menu Items/WorkersList/WorkerList';
import PatientList from './components/Menu Items/PatientList/PatientList';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <div className='modules'>
          <Menu />
          <Routes>
            <Route path="/DoctorDashboard/" element={<Main />} />
            <Route path="/DoctorDashboard/workers" element={<WorkerList />} />
            <Route path="/DoctorDashboard/patients" element={<PatientList />} />
            <Route path="/DoctorDashboard/finance" element={<Finance />} />
            <Route path="/DoctorDashboard/patients" element={<PatientList />} />
            <Route path="*" element={<h1 style={{ marginLeft: "35%" }}>Данной страницы не существует</h1>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
