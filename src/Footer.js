import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
<footer class="footer-distributed">

			<div class="footer-left">

                    <h3>@drsimplegraffiti<span>$</span></h3>

				<p class="footer-links">
					<a href="/" class="link-1">Home</a>
					
					<a href="/blogs">Blog</a>
				
					<a href="/portfolio">Portfolio</a>
				
					{/* <a href="#about-me">About</a> */}
					
					<a href="/services">Services</a>
					
					<a href="contact">Contact</a>
				</p>

				<p class="footer-company-name">Abayomi  Ogunnusi © 2021</p>
			</div>

			<div class="footer-center">

				<div>
					<i class="fa fa-map-marker"></i>
					<p><span>Abeokuta</span> Ogun-State, Nigeria</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+234 8168 623 014</p>
				</div>

				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="abayomiogunnusi@gmail.com">abayomiogunnusi@gmail.com</a></p>
				</div>

			</div>

			<div class="footer-right">

				<p class="footer-company-about">
					<span id="about-me">About Abayomi</span>
					Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
				</p>

				<div class="footer-icons">
					<a href="/https://web.facebook.com/ogunnusi.J.simple/"><img src="/img/facebook.png" alt="facebook" /></a>
					<a href="/https://twitter.com/drsimplegraffi1"><img src="/img/twitter.png" alt="twitter" /></a>
					<a href="/linkedin.com/in/abayomi-ogunnusi-974826141/"><img src="/img/linkedin.png" alt="linkedin" /></a>
					<a href="/https://github.com/drsimplegraffiti"><img src="/img/github-sign.png" alt="github" /></a>

				</div>

			</div>

		</footer>

</div>

      );
}
 
export default Footer;