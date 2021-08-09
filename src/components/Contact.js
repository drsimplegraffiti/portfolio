import Zoom from 'react-reveal/Zoom';
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
    const [state, handleSubmit] = useForm("xrgryvyw");
  if (state.succeeded) {
      return <p>Thanks for contacting!</p>;
  }
    return (
        <Zoom>
            <section className="contact section" id="contact">
                
                    <h2 className="section-title">Contact</h2>
                

                <div className="contact__container bd-grid">
                    <form action="https://formspree.io/f/xrgryvyw" method="POST" onSubmit={handleSubmit} className="contact__form">
                           
                        <input type="text" placeholder="Name" className="contact__input" />
                        <input type="email" placeholder="Email" className="contact__input" />
                        <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
                        <textarea name="message" id="message" cols="0" rows="10" className="contact__input" placeholder="Type message here..."></textarea>
                          <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
                        <input type="button" value="Submit" className="contact__button button" />
                    </form>
                </div>
            </section>
            </Zoom>
        
     );
}
 
export default Contact;