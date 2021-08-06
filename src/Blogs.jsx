import Fade from 'react-reveal/Fade';


const Blogs = () => {
    return (
        <div className="about-container">
            <div className="card-container">
                <div className="card">
                    <section class="services">
                        <div class="s-heading">
                            <Fade top>
                                <h1>Blo<font color="#201820">gs</font>  Section</h1>
                            </Fade>
                            <Fade bottom>
                                <p>Read Blogs authored by me</p>
                                </Fade>
        </div>
        <div class="s-box-container">

            <div class="s-box">
                <div class="bar"></div>
                <img alt="1" src="/img/broswerpage.jpg" loading="lazy"  />
                <h1>Generate Invoice</h1>
                <p>Use JavaScript to download browser page</p>
                <a class="s-btn" href="https://dev.to/drsimplegraffiti/generate-invoice-pdf-dmd">More</a>
            </div>
            <div class="s-box">
                <div class="bar"></div>
                <img alt="2" src="/img/websocket.png" loading="lazy" />
                <h1>Socket.io</h1>
                <p>Use Web Socket to create real-time chat app</p>
                <a class="s-btn" href="https://dev.to/drsimplegraffiti/chat-app-using-socket-io-1hp0">More</a>
            </div>
            <div class="s-box">
                <div class="bar"></div>
                <img alt="3" src="/img/mailnodejs.jpg" loading="lazy" />
                <h1>Node Mailer</h1>
                <p>Use Node Mailer to send mails to client</p>
                <a class="s-btn" href="https://dev.to/drsimplegraffiti/send-mails-using-nodejs-42ag">More</a>
            </div>
        </div>
    </section>
                </div>
            </div>
        </div>

     );
}
 
export default Blogs;