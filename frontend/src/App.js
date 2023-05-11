import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import AddArts from './components/AdminPage';
import ShowArts from './components/ShowArts';
import AllUsers from './components/AllUsers';
import AddArt from './components/Art/AddArt';
import ShowArt from './components/Art/ShowArt';
import UpdateArt from './components/Art/UpdateArt';
import PrivateRoutes from './components/PrivateRoutes';
  

function App() {
  return (
    <>
    <Navbar/>
    
    
    <br></br>
    <Routes>
    <Route  path="/" element={<Home/>} />
      <Route  path="/about" element={<About/>} />
      <Route  path="/services" element={<Services/>} />
      <Route  path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/show-arts" element={<ShowArts/>} />
      
      <Route element={<PrivateRoutes/>}>
        
      <Route path="/admin-Dashboard" element={<AddArts/>} />
      <Route path="/addart" element={<AddArt/>} />
      <Route path="/allart" element={<ShowArt/>} />
      <Route path="/editform/:id" element={<UpdateArt/>} />
      <Route path="/allusers" element={<AllUsers/>} />

      </Route>
      
    </Routes>
    <Footer/>
    
    </>
  );
}

export default App;
