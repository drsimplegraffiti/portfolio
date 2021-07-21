// import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Animated } from "react-animated-css";
import { BounceLoader, PropagateLoader, ClockLoader } from 'react-spinners';
// import Button from '@material-ui/core/Button';




const Button = () => {
<Animated animationIn="bounceInLeft" animationOut="fadeOut" isVisible={true}></Animated>
    const buttonStyle = {
        color: 'white'
    }

    return ( 
        <div>
            <button className="hire-me tooltip" ><Link to='/contact' style={buttonStyle}>Hire Me   <i class="fa fa-chevron-right" aria-hidden="true" className="tooltiptext">Fill the form </i><i class="fa fa-chevron-right" aria-hidden="true"></i></Link></button>
            <div className="bounce">
                <ClockLoader size={ 600} color='#f8a800' loading/> <br />
                </div>
        </div>
     );
}
 
export default Button;


