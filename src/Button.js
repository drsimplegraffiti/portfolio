import { Link } from 'react-router-dom';
import {Animated} from "react-animated-css";
// import { BounceLoader } from 'react-spinners';




const Button = () => {
<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}></Animated>
    const buttonStyle = {
        color: 'white'
    }

    
    // useEffect(() => {
    //     setLoading(true)
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 2000)
    // }, [])

    return ( 
        <div>
      
            <button className="hire-me" ><Link to='/contact' style={buttonStyle}>Hire Me</Link></button>
        </div>
     );
}
 
export default Button;