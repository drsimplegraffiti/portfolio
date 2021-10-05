import Fade from 'react-reveal/Zoom';




const Blogs = () => {
    return (
        <Fade>
           
            <section className="work section" id="blogs">
                <h2 className="section-title">Blogs</h2>

                <div className="work__container bd-grid">
                    <div className="work__img">
                        <a href= "https://dev.to/drsimplegraffiti/build-simple-node-js-api-no-external-package-5h9j"><img src="/img/mynode.jpg" alt="chat app" /></a>
                        <p>Node Js API: no external package</p>
                    </div>
                    <div className="work__img">
                      <a href="https://dev.to/drsimplegraffiti/ngrok-expose-a-local-web-server-to-the-internet-4m67"> <img src="/img/ngrokblog.png" alt="ngrok direct app" /></a> 
                        <p>Expose a local web server </p>
                    </div>
                    <div className="work__img">
                        <a href="https://dev.to/drsimplegraffiti/chat-app-using-socket-io-1hp0"><img src="/img/chatwebblog.png" alt="cray pics" /></a>
                        <p>Chat App using Socket.io </p>
                    </div>
                    <div className="work__img">
                        <a href="https://dev.to/drsimplegraffiti/improve-your-github-page-5hhc"><img src="/img/githubblog.png" alt="github pics" /></a>
                        <p>Improve your Github Profile </p>
                    </div>
                    <div className="work__img">
                        <a href="https://dev.to/drsimplegraffiti/flutter-wave-payment-integration-47pp"><img src="/img/fluterwave.png" alt="flutterwave pics" /></a>
                        <p>Flutter Wave Payment Integration  </p>
                    </div>
                    <div className="work__img">
                        <a href="https://dev.to/drsimplegraffiti/generate-invoice-pdf-dmd"><img src="/img/pdfblog.png" alt="pdf pics" /></a>
                        <p>Download Browser Page as PDF </p>
                    </div>
                </div>
            </section>
         
            </Fade>
     );
}
 
export default Blogs;