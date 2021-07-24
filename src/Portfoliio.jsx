import Fade from 'react-reveal/Fade';
// import {Container,Row,Col,UncontrolledTooltip} from "reactstrap";


const Portfolio = () => {
    return (
        <div className="about-container">
            <div className="card-container">
                <div className="card">
                   
                    <section class="services">

                        <div class="s-heading">
                            <Fade top>
            <h1>Proj<font color="#201820">ects</font>  Section</h1>
                            </Fade>
                            
                            <Fade bottom>
                                <p>Check Out a few of my Works</p>
                                </Fade>
        </div>
        <div class="s-box-container">

            <div class="s-box">
                <div class="bar"></div>
                <img className="image-size" alt="1" src="/img/wdp.jpg" />
                {/* <video className="image-size" src="/img/tinychat.mp4"></video> */}
                <h1>Management System</h1>
                <p className="light">Tools: NodeJs, Express, MongoDb</p>
                <a class="s-btn" href="https://github.com/drsimplegraffiti/wonderful-direct-pharmacy">More</a>
            </div>
            <div class="s-box">
                <div class="bar"></div>
                <img className="image-size" alt="2" src="/img/tiny.jpg" />
                <h1>Tiny Chat App</h1>
                <p className="light">Tools: NodeJs, Socket.io</p>
                <a class="s-btn" href="https://dev.to/drsimplegraffiti/chat-app-using-socket-io-1hp0">More</a>
            </div>
            <div class="s-box">
                <div class="bar"></div>
                <img className="image-size" alt="3" src="/img/mailnodejs.jpg" />
                <h1>News Network Demo</h1>
                <p className="light">Tools: NodeJs, Express, MongoDb</p>
                <a class="s-btn" href="https://github.com/drsimplegraffiti/CNN">More</a>
            </div>
        </div>
    </section>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;