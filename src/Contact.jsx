
const Contact = () => {
  return (
    <div>
 
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" required placeholder="Please enter name here" /> <br />
        <label htmlFor="name">Email</label>
        <input type="email" required placeholder="Please enter email here" /> <br />
        <textarea name="message" id="" cols="30" rows="10"></textarea> <br />
        <button  type="submit">Submit</button>
      </form>
    </div>
   );
}
 
export default Contact;