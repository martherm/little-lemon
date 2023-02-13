import React from "react";
import Header from './Header'
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';

function App () {
  return (
      <>
      <div className="App">
        <Header/>
        <Nav/>
        <Home/>
        <Footer/>
      </div>
      </>
  );
}

export default App;
