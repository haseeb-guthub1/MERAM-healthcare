import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Doctors from './pages/Doctors';
import Dashboard from './pages/Dashboard';
import MedicinePage from './pages/MedicinePage';
import DoctorDetails from './pages/DoctorDetails';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/medicines" element={<MedicinePage />} />
        <Route path="/doctors/:doctorId" element={<DoctorDetails />} />
        {/* Add more routes here */}
      </Routes>
    </div>
  );
}

export default App; 

// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";
// import Doctors from "./pages/Doctors";
// import Dashboard from "./pages/Dashboard";
// import MedicinePage from "./pages/MedicinePage";
// import DoctorDetails from "./pages/DoctorDetails";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-gray-50">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/doctors" element={<Doctors />} />
//           <Route path="/medicines" element={<MedicinePage />} />
//           <Route path="/doctors/:doctorId" element={<DoctorDetails />} />
//           {/* Add more routes here */}
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
