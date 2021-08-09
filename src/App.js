import { Lines } from 'react-preloaders2';
import Main from './components/Main';
import Navbar from './components/Navbar'; 
import Navbar2 from './components/Navbar2'; 
import Footer from './components/Footer';
import React,{useState} from 'react';

const App = () => {
    const [hide, setHide] = useState();
    return (
        <>
        <Navbar />
            {/* <Navbar2/> */}
        <Main />
            <Footer />
            <Lines />
            </>
        
    );
}

export default App;