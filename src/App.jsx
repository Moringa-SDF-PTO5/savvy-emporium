import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home'
import Navbar from './components/structure/Navbar';
import Footer from './components/structure/Footer';
import Profile from './components/profile/Profile';



function App() {
  return (
   <div> 
      <Router>
          <Navbar />
      <Routes>  
          <Route path="/" element={<Home />} /> 
          <Route path="/profile" element={<Profile/>} /> 
      </Routes>
          <Footer/>
    </Router>
    </div>
  );
}
export default App
