

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Help from './Components/Pages/Help';
import Company from './Components/Pages/UserRegister';
// import NewProject from './Components/Pages/NewProject';
// import Projects from './Components/Pages/Projects';

// import Container from './Components/Layout/Container'
import Navbar from './Components/Layout/Navbar';
// import Footer from './Components/Layout/Footer'
import Styles from './index.css'
import UserRegister from './Components/Pages/UserRegister';
import SitterRegister from './Components/Pages/SitterRegister';

function App() {
  return (
   
    <Router>
      <Navbar/>
      {/* <Container customClass='minHeight'> */}
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/help' element={<Help/>}></Route>
          <Route exact path='/user-register' element={<UserRegister/>}></Route>
          <Route exact path='/sitter-register' element={<SitterRegister/>}></Route>
          {/* <Route exact path='/company' element={<Company/>}></Route>
          <Route exact path='/contact' element={<Contact/>}></Route>
          <Route exact path='/newproject' element={<NewProject/>}></Route> */}
        </Routes>
      {/* </Container> */}

      {/* <Footer/> */}
    </Router>
   
  );
}

export default App;
