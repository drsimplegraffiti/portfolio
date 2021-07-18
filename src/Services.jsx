// import Button from '@material-ui/core/Button';


const Services = () => {
    return (  

        <div className="about-container">
            <div className="card-container">
                <div className="card">
                    <section class="services">

        <div class="s-heading">
            <h1>Serv<font color="#201820">ices</font>  Section</h1>
            <p>Read Blogs authored by me</p>
        </div>
        <div class="s-box-container">

            <div class="s-box">
                <div class="bar"></div>
                <img alt="1" src="/img/web-programming.png" />
                <h1>Web Design</h1>
                <p>Use JavaScript to download browser page</p>
                <a class="s-btn" href="https://dev.to/drsimplegraffiti/generate-invoice-pdf-dmd">More</a>
            </div>
            <div class="s-box">
                <div class="bar"></div>
                <img alt="2" src="/img/blogger.png" />
                <h1>Content Creating</h1>
                <p>Use Web Socket to create real-time chat app</p>
                <a class="s-btn" href="https://dev.to/drsimplegraffiti/chat-app-using-socket-io-1hp0">More</a>
            </div>
            <div class="s-box">
                <div class="bar"></div>
                <img alt="3" src="/img/setting.png" />
                <h1>Development</h1>
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
 
export default Services;




