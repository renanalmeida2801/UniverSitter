import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Help from './Components/Pages/Help';
import UserRegister from './Components/Pages/UserRegister';
import SitterRegister from './Components/Pages/SitterRegister';
import Login from './Components/Pages/Login';
import FindSitter from './Components/Pages/FindSitter';
import Navbar from './Components/Layout/Navbar';
import AuthContext from './Context/auth'; // Import the context

function App() {
  const { user } = useContext(AuthContext); // Use context correctly

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/help' element={<Help />} />
        <Route path='/user-register' element={<UserRegister />} />
        <Route path='/sitter-register' element={user ? <SitterRegister /> : <Login />} />
        <Route path='/find-sitter' element={user ? <FindSitter /> : <Login />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
