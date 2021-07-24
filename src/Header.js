import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import LightCSS from './List.module.css';



const Header = () => {
//     const navStyles = {
//     color:'white'
// }

    return (  
        
    <div>    
            <header>
                <Bounce>
                    <nav>
                        <ul>
                            <div className="main-logo">
                                <Link to="/" > <li><i class="fa fa-home" aria-hidden="true"></i> Dr. Simple</li></Link>
                                </div>
                                    <Link to="/resume"> <li className={LightCSS.resize}>Resume</li></Link>
                                    <Link to="/designs" > <li  className={LightCSS.resize}>Graphics</li></Link>
                                    <Link to="/portfolio" > <li  className={LightCSS.resize}>Projects</li></Link>
                                    <Link to="/blogs" > <li  className={LightCSS.resize}>Blogs</li></Link>
                                    <Link to="/contact" > <li  className={LightCSS.resize}>Contact</li></Link>
                        </ul>
                    </nav>
                    </Bounce>
        </header>
    </div>
        
    );
}
 
export default Header;
