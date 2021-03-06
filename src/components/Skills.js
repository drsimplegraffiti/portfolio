import Zoom from 'react-reveal/Zoom';


const Skills = () => {
    return (
        <Zoom>
            <section className="skills section" id="skills">
                <h2 className="section-title">Skills</h2>

                <div className="skills__container bd-grid">          
                    <div>
                        <h2 className="skills__subtitle">Professional Skills</h2>
                        <p className="skills__text">My tools and Languages are :
HTML5, CSS3, JavaScript, NodeJs, ExpressJs, MongodB, React Js, Bootstrap, Postman.</p>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-react skills__icon'></i>
                                <span className="skills__name">Front-End Development</span>
                            </div>
                            <div className="skills__bar skills__html">

                            </div>
                            <div>
                                <span className="skills__percentage">🎯</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-nodejs skills__icon'></i>
                                <span className="skills__name">Back-End Development</span>
                            </div>
                            <div className="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">🎯</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i class='bx bxl-dev-to skills__icon'></i>
                                <span className="skills__name">Blogging</span>
                            </div>
                            <div className="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">🎯</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxs-paint skills__icon'></i>
                                <span className="skills__name">Graphics Design</span>
                            </div>
                            <div className="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">🎯</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>              
                        <img src="/img/laptp-min.jpg" alt="" className="skills__img" />
                    </div>
                </div>
            </section>
            </Zoom>
     );
}
 
export default Skills;