import {Link} from 'react-router-dom';


const Button = () => {

    const buttonStyle = {
        color: 'white'
    }
    return ( 
        <div>
                <button className="hire-me">
            <Link to='/contact' style={buttonStyle}>Hire Me</Link>
                </button>
        </div>
     );
}
 
export default Button;