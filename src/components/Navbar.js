import React, { useState } from "react";
import { slide as Menu } from 'react-burger-menu';



const Navbar = () => {
const [isMenuOpen, handleMenu] = useState(false);
  const handleCloseMenu = () => {
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };


    return (
        
        <>
          
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <a href="/" className="nav__logo">Ximple</a>
                </div>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                            <Menu  disableOverlayClick  right pageWrapId={"page-wrap"}
        isOpen={isMenuOpen}
        onStateChange={handleStateChange} width={ '40%' } >
                                
                   
                        <li className="nav__item"><a onClick={() => handleCloseMenu()} href="#home" className="nav__link active">Home</a></li>
                        <li className="nav__item"><a onClick={() => handleCloseMenu()} href="#about" className="nav__link">About</a></li>
                        <li className="nav__item"><a onClick={() => handleCloseMenu()} href="#skills" className="nav__link">Skills</a></li>
                        <li className="nav__item"><a onClick={() => handleCloseMenu()} href="#work" className="nav__link">Graphics</a></li>
                        <li className="nav__item"><a onClick={() => handleCloseMenu()} href="#projects" className="nav__link">Projects</a></li>
                        <li className="nav__item"><a onClick={() => handleCloseMenu()} href="#contact" className="nav__link">Contact</a></li>
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