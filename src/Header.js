import { Link } from 'react-router-dom';



const Header = () => {
//     const navStyles = {
//     color:'white'
// }

    return (  
        
    <div>    
        <header>  
                    <nav >
                            <ul>
                                    <Link to="/" > <li><i class="fa fa-home" aria-hidden="true"></i> Home</li></Link>
                                    <Link to="/resume"> <li>Resume</li></Link>
                                    <Link to="/services" > <li>Services</li></Link>
                                    <Link to="/portfolio" > <li>Projects</li></Link>
                                    <Link to="/blogs" > <li>Blogs</li></Link>
                                    <Link to="/contact" className="contact"> <li>Contact</li></Link>
                        </ul>
                    </nav>
        </header>
    </div>
        
    );
}
 
export default Header;
