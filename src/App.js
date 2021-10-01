// import React, { Component } from 'react'
// import React,  {useState,useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Lines } from 'react-preloaders2';
import Main from './components/Main';
import Navbar from './components/Navbar'; 
// import Navbar2 from './components/Navbar2'; 
import Footer from './components/Footer';
// import Success from './components/Success';





const App = () => {
        //   const shouldDisplayButton = searchValue.length > 0;
        // console.log(shouldDisplayButton);
    return (
        <>
            <Router>    
        <Navbar />
                        {/* {shouldDisplayButton &&  <button className={"btn"} onClick={handleClick}>clear</button>} */}

           {/* <Navbar2/> */}
                    <Main />   
            <Footer />
            <Lines />
              {/* <Success /> */}
            </Router>
          
            </>
    );
}

export default App;


