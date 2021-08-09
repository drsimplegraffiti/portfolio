import { Link } from "react-router-dom";
import Fade from 'react-reveal/Zoom';



const Projects = () => {
    return (
        <Fade>
            
            <section class="work section" id="projects">
                <h2 class="section-title">Projects</h2>

                <div class="work__container bd-grid">
                    <div class="work__img">
                        <Link to="/https://github.com/drsimplegraffiti/tiny"><img src="/img/tiny.JPG" alt="" /></Link>
                        <p>Chat App Using WebSocket</p>
                    </div>
                    <div class="work__img">
                      <Link to="/https://github.com/drsimplegraffiti/wonderful-direct-pharmacy"> <img src="/img/websocket.png" alt="" /></Link> 
                        <p>Pharmacy Management System</p>
                    </div>
                    <div class="work__img">
                        <Link to="/https://github.com/drsimplegraffiti/Cray_News"><img src="/img/broswerpage.jpg" alt="" /></Link>
                        <p>Cray News Network</p>
                    </div>
                </div>
            </section>
            </Fade>
     );
}
 
export default Projects;