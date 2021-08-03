import { Spring } from 'react-spring';
import Zoom from 'react-reveal/Zoom';
import React from 'react';
import Button from './Button';
import Brief from './Brief';

const Aside = () => {

    
    return (
        <Spring
            from={{ opacity : 0, marginTop: -500}}
            to={{ opacity : 1, marginTop: 0 }}
          >
                {props=>(
                <div style={props}>
                    <div className="aside-container">
                                <Zoom>
                                    <aside>
                                    <img className="Title" src="/img/Title.jpg" alt="background"  id="main-image" />
                                    {/* <img className="Title" src="/img/anime.gif" alt="background" /> */}
                            </aside>
                            </Zoom> 
                                <Brief />
                                <Button />
            </div>
                </div>
        )}
        </Spring>
     );
}
 
export default Aside;