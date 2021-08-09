import { Lines } from 'react-preloaders2';
import Main from './components/Main';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';

const App = () => {
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