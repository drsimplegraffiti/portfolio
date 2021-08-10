import Zoom from 'react-reveal/Zoom';

const About = () => {
    return (
        <div>
             <Zoom>
            <section className="about section " id="about">
                <h2 className="section-title">About</h2>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src="/img/myImg-min.png" alt="authors pics" />
                    </div>
                    
                    <div>
                        <h2 className="about__subtitle">I'am Abayomi</h2>
                        <p className="about__text">I work to create innovative solutions that inspires and foster memorable relationships between brands ands and their clients. With focus in Backend and FrontEnd Development, I strive to create scalable and reusable products through elegant but efficient co and modern web practices.</p>           
                    </div>                                   
                </div>
                </section>
                </Zoom>
        </div>
    );
}

export default About;