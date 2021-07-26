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
                    <div class="toggle"></div>
                    <nav>
                        <ul>
                            <div className="main-logo active">
                                <Link to="/" > <li><i class="fa fa-home" aria-hidden="true"></i> Ximple</li></Link>
                                </div>
                                    <Link to="/resume" id="myLinks"> <li className={LightCSS.resize}>Resume</li></Link>
                                    <Link to="/designs" id="myLinks"> <li  className={LightCSS.resize}>Graphics</li></Link>
                                    <Link to="/portfolio" id="myLinks"> <li  className={LightCSS.resize}>Projects</li></Link>
                                    <Link to="/blogs" id="myLinks"> <li  className={LightCSS.resize}>Blogs</li></Link>
                                    <Link to="/contact" id="myLinks"> <li  className={LightCSS.resize}>Contact</li></Link>
                        </ul>
                    </nav>
           {/* <Link to="javascript:void(0);" className="icon" onClick="myFunction()"> */}
    {/* <i class="fa fa-bars"></i> */}
  {/* </Link> */}
                    </Bounce>
        </header>
    </div>
        
    );
}
 
export default Header;
