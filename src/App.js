import logo from './logo.svg';
import './App.css';

import "../src/sb-admin-2.min.css"

import ReactDOM from "react-dom/client";
import Dashboard from './Dashboard';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Teachers from './Teachers';
import Students from './Students';
import Tview from './Tview';
import Tedit from './Tedit';
import Sview from './Sview';
import Sedit from './Sedit';
import Createteacher from './Createteacher';
import Createstudent from './Createstudent';
import Login from './Login';
import Portal from './Portal';
import {Ab} from './Context'
function App() {
  return (
    <BrowserRouter>

      <Ab>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />} >
          <Route path="/portal/dashboard" element={<Dashboard />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="teachers/createteacher" element={<Createteacher />} />
          <Route path="teachers/view/:id" element={<Tview />} />
          <Route path="teachers/edit/:id" element={<Tedit />} />
          <Route path="students" element={<Students />} />
          <Route path="students/createstudent" element={<Createstudent />} />
          <Route path="students/view/:id" element={<Sview />} />
          <Route path="students/edit/:id" element={<Sedit />} />
        </Route>
      </Routes>
      </Ab>

    </BrowserRouter>

  );
}

export default App;
