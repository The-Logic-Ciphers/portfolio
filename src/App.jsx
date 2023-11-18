import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from './pages/Home'
import Contacts from "./pages/Contacts";


const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/contact" element={<Contacts/>} />
            </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;
