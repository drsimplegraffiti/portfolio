// import React, { Component } from 'react'
// import React,  {useState,useEffect} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Lines } from 'react-preloaders2';
import Main from './components/Main';
import Navbar from './components/Navbar'; 
// import Navbar2 from './components/Navbar2'; 
import Footer from './components/Footer';





const App = () => {
   
    return (
        <>
            <Router>
               
        <Navbar />
           {/* <Navbar2/> */}
                    <Main />
                   
            <Footer />
            <Lines />
        </Router>
            </>
    );
}

export default App;


// export class App extends Component {
//      state = {
//     visible:false
// }

//     render() {
//         return (
//             <>
//              <Router>
               
//         { this.state.visible ? <Navbar /> : null }
//            {this.state.visible ? <Navbar2/> : <Navbar /> }
//                      <Main />
                   
//              <Footer />
//              <Lines />
//          </Router>
//              </>
//         )
//     }
// }

// export default App



