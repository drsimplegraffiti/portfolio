import Zoom from 'react-reveal/Zoom';
import emailjs from 'emailjs-com';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_zyzcfot',
            'template_1753n84',
            e.target,
            'user_bpXSBo6dceZos4r9c1omo').then(res => {
                console.log(res);
            }).catch(err => console.log(err));
}
    return (
        <Zoom>
            <section className="contact section" id="contact">
                
                    <h2 className="section-title">Contact</h2>
                

                <div className="contact__container bd-grid">
                    <form onSubmit={sendEmail}  action="" method="POST" className="contact__form">
                           
                        <input type="text" placeholder="Name" className="contact__input" name="name" />
                        <input type="email" placeholder="Email" className="contact__input" name="user_email" />
                        
                        <textarea name="message" id="message" cols="0" rows="10" className="contact__input" placeholder="Type message here..."></textarea>
                        <input 
                            type="submit"
                            value="Send"
                            className="contact__button button"></input>
                    </form>
                </div>
            </section>
            </Zoom>
        
     );
}
 
export default Contact;