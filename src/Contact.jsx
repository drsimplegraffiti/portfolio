import Reveal from 'react-reveal/Reveal';


const Contact = () => {
    return (
      <Reveal effect="fadeInUp">
    <div>
 <div className="s-heading"> <h1>Con<font color="#201820">tact</font>  -Me</h1>
              {/* <p>Check Out a few of my Works</p> */}
          </div>
      <form>
<ul class="form-style-1">
    <li><label>Full Name <span class="required">*</span></label><input type="text" name="field1" class="field-divided" placeholder="First" /> <input type="text" name="field2" class="field-divided" placeholder="Last" /></li>
    <li>
        <label>Email <span class="required">*</span></label>
        <input type="email" name="field3" class="field-long" />
    </li>
    <li>
        <label>Subject</label>
        <select name="field4" class="field-select">
        <option value="Advertise">Advertise</option>
        <option value="Partnership">Partnership</option>
        <option value="General Question">General</option>
        </select>
    </li>
    <li>
        <label>Your Message <span class="required">*</span></label>
        <textarea name="field5" id="field5" class="field-long field-textarea"></textarea>
    </li>
    <li>
        <input type="submit" value="Submit" />
    </li>
</ul>
</form>
            </div>
            </Reveal>
   );
}
 
export default Contact;