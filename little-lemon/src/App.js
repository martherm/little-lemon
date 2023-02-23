import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header'
import Nav from './Nav';
import Footer from './Footer';
import Home from "./Home";
import BookingPage from "./BookingPage";

function App () {
  return (
      <>
      <Router>
      <div className="App">
        <Header/>
        <Nav/>
        <Routes>
          <Route  path="/*" element={<Home/>} />
          <Route path="/reservation" element={<BookingPage/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    </>
  );
}

export default App;