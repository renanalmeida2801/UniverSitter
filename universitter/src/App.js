

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Help from './Components/Pages/Help';
// import Company from './Components/Pages/Company';
// import NewProject from './Components/Pages/NewProject';
// import Projects from './Components/Pages/Projects';

// import Container from './Components/Layout/Container'
import Navbar from './Components/Layout/Navbar';
// import Footer from './Components/Layout/Footer'
import Styles from './index.css'

function App() {
  return (
   
    <Router>
      <Navbar/>
      {/* <Container customClass='minHeight'> */}
        <Routes>
          <Route exact path='/' element={<Home/>}></Route>
          <Route exact path='/help' element={<Help/>}></Route>
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
