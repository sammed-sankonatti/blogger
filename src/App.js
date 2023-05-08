import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar.jsx';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Auth from './components/Auth/Auth';




function App() {

  

  return (
    <Router>
      <Container maxWidth ='lg'>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
    </Container>
    </Router>
  );
}

export default App;
