import Zoom from 'react-reveal/Zoom';

const Contact = () => {
    return (
        <Zoom>
            <section className="contact section" id="contact">
                
                    <h2 className="section-title">Contact</h2>
                

                <div className="contact__container bd-grid">
                    <form action="" className="contact__form">
                        <input type="text" placeholder="Name" className="contact__input" />
                        <input type="mail" placeholder="Email" className="contact__input" />
                        <textarea name="" id="" cols="0" rows="10" className="contact__input" placeholder="Type message here..."></textarea>
                        <input type="button" value="Submit" className="contact__button button" />
                    </form>
                </div>
            </section>
            </Zoom>
        
     );
}
 
export default Contact;