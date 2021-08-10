import Fade from 'react-reveal/Zoom';



const Projects = () => {
    return (
        <Fade>
            
            <section className="work section" id="projects">
                <h2 className="section-title">Projects</h2>

                <div className="work__container bd-grid">
                    <div className="work__img">
                        <a href= "/https://github.com/drsimplegraffiti/tiny"><img src="/img/tinyapp.JPG" alt="chat app" /></a>
                        <p>Chat App Using WebSocket</p>
                    </div>
                    <div className="work__img">
                      <a href="/https://github.com/drsimplegraffiti/wonderful-direct-pharmacy"> <img src="/img/wdp-min.jpg" alt="wonderful direct app" /></a> 
                        <p>Pharmacy Management System</p>
                    </div>
                    <div className="work__img">
                        <a href="/https://github.com/drsimplegraffiti/Cray_News"><img src="/img/cnn.jpg" alt="cray news pics" /></a>
                        <p>Cray News Network</p>
                    </div>
                </div>
            </section>
            </Fade>
     );
}
 
export default Projects;