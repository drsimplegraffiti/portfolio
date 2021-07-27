import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';
import LightCSS from './List.module.css';



const Header = () => {
//     const navStyles = {
//     color:'white'
// }
    const [click, setClick] = useState(false);
    const handleClick =()=> setClick(!click);
    return (  
        
    <div>    
            <header>
                <Bounce>
                    {/* <div class="toggle"></div> */}
                    <nav className="navbar">
                        <div className="nav-container">
                            <ul className={click ? "nav-menu active" : "nav-menu"}>
                                <div className="main-logo">
                                <Link to="/"  activeClassName="active"  onClick={handleClick}> <li><i class="fa fa-home" aria-hidden="true"></i> Ximple</li></Link>
                                </div>
                                    <Link to="/resume" className="nav-links" activeClassName="active" onClick={handleClick}> <li className={LightCSS.resize}>Resume</li></Link>
                                    <Link to="/designs" className="nav-links" activeClassName="active"  onClick={handleClick}> <li  className={LightCSS.resize}>Graphics</li></Link>
                                    <Link to="/portfolio" className="nav-links" activeClassName="active"  onClick={handleClick}> <li  className={LightCSS.resize}>Projects</li></Link>
                                    <Link to="/blogs" className="nav-links" activeClassName="active"  onClick={handleClick}> <li  className={LightCSS.resize}>Blogs</li></Link>
                                    <Link to="/contact" className="nav-links" activeClassName="active"  onClick={handleClick}> <li  className={LightCSS.resize}>Contact</li></Link>
                      </ul>
                            <div className="nav-icon" onClick={handleClick}>
                                <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
                            </div>
                            </div>
                    </nav>
                     </Bounce>
        </header>
    </div>
        
    );
}
 
export default Header;
