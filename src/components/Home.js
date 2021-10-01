import{ Zoom  }from 'react-reveal';
import Typed from 'react-typed';
const Home = () => {
    return (
       <Zoom>
            <section className="home bd-grid" id="home">
                <div className="home__data">
                    <h1 className="home__title">Hi,<br />I'm <span className="home__title-color">Abayomi</span><br /> <Typed strings={['WEB DEVELOPER']} typeSpeed={100} /></h1>

                    <a href="#contact" className="button">Hire me</a>
                </div>

                <div className="home__social">
                    <a href="https://www.linkedin.com/in/abayomi-ogunnusi-974826141/" className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                    <a href="https://dev.to/drsimplegraffiti" className="home__social-icon"><i class='bx bxl-dev-to'></i></a>
                    <a href="https://github.com/drsimplegraffiti" className="home__social-icon"><i className='bx bxl-github' ></i></a>
                </div>

                <div className="home__img">    
                    <img src="/img/yomi.png" alt="the authors pics" />
                </div>
            </section>
            </Zoom>
                 
                        
     );
}
 
export default Home;