import Zoom from 'react-reveal/Zoom';

const About = () => {
    return (
        <div>
             <Zoom>
            <section class="about section " id="about">
                <h2 class="section-title">About</h2>

                <div class="about__container bd-grid">
                    <div class="about__img">
                        <img src="/img/Title.jpg" alt="" />
                    </div>
                    
                    <div>
                        <h2 class="about__subtitle">I'am Abayomi</h2>
                        <p class="about__text">I work to create innovative solutions that inspires and foster memorable relationships between brands ands and their clients. With focus in Backend and FrontEnd Development, I strive to create scalable and reusable products through elegant but efficient codes and modern web practices.</p>           
                    </div>                                   
                </div>
                </section>
                </Zoom>
        </div>
    );
}

export default About;