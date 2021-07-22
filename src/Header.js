import { Link } from 'react-router-dom';
import Bounce from 'react-reveal/Bounce';



const Header = () => {
//     const navStyles = {
//     color:'white'
// }

    return (  
        
    <div>    
            <header>
                <Bounce>
                    <nav >
                            <ul>
                                    <Link to="/" > <li><i class="fa fa-home" aria-hidden="true"></i> Home</li></Link>
                                    <Link to="/resume"> <li>Resume</li></Link>
                                    <Link to="/designs" > <li>Graphics</li></Link>
                                    <Link to="/portfolio" > <li>Projects</li></Link>
                                    <Link to="/blogs" > <li>Blogs</li></Link>
                                    <Link to="/contact" > <li>Contact</li></Link>
                        </ul>
                    </nav>
                    </Bounce>
        </header>
    </div>
        
    );
}
 
export default Header;
