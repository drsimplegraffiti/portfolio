import{ Zoom, Slide  }from 'react-reveal';
import Typed from 'react-typed';



const Brief = () => {

    return (
        <div className="brief">
                <Zoom>
                <p className="subheading"><Typed strings={['SEO OPTIMIZED WEBSITE']} typeSpeed={80} /></p>
            </Zoom>
            <Slide left>
                <p className="ad-copy">Get Awesome <br /> Website</p>
                </Slide>
                <div class="vl"></div>
        </div>
    );
}

export default Brief;