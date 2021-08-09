

const Footer = () => {
    return (
        
        <footer className="footer">
           <img className="logo" src="/img/logo.png" alt="" /> <p className="footer__title">Abayomi © 2021</p>
            <div className="footer__social">
                <a href="https://web.facebook.com/ogunnusi.J.simple/" className="footer__icon"><i className='bx bxl-facebook' ></i></a>
                <a href="https://www.instagram.com/drsimplegraffiti/" className="footer__icon"><i className='bx bxl-instagram' ></i></a>
                <a href="https://twitter.com/drsimplegraffi1" className="footer__icon"><i className='bx bxl-twitter' ></i></a>
            </div>
            <p className="footer-links">
					<a href="/" className="link-1">Home</a>
					
					<a href="#projects">Projects</a>
						
					<a href="#about">About</a>
					
					
					<a href="#contact">Contact</a>
				</p>
            <p>&#169; 2021 copyright</p>
        </footer>

     );
}
 
export default Footer;