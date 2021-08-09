import { slide as Menu } from 'react-burger-menu'



const Navbar = () => {



    return (
        
        <>
          
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="/" className="nav__logo">Ximple</a>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                            <Menu  disableOverlayClick  right pageWrapId={ "page-wrap" } width={ '40%' } >
                                
                   
                        <li className="nav__item"><a href="#home" className="nav__link active">Home</a></li>
                        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
                        <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
                        <li className="nav__item"><a href="#work" className="nav__link">Graphics</a></li>
                        <li className="nav__item"><a href="#projects" className="nav__link">Projects</a></li>
                        <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
                      </Menu>
                    </ul>
                </div>

                <div className="nav__toggle" id="nav-toggle">
                    {/* <i className='bx bx-menu'></i> */}
                </div>
            </nav>
        </header>
        </>
     );
}
 
export default Navbar;