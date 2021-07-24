import Zoom from 'react-reveal/Zoom';
import Skills from './Skills';

const Resume = () => {
    return (
        <Zoom>
            <>
                <Skills />
            <div className="resume-container">
                <div className="resume-card">
            <img src="/img/cv.jpg" alt="my cv"  className="cv" id="resume"/>
                </div>
                </div>
                                
            </>
            </Zoom>


    );
}

export default Resume;