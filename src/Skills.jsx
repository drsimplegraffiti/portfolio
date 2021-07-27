import SkillMode from './Skillset.module.css';


import Arrow from './Arrow.module.css';

const Skills = () => {
    return (
        <div className={SkillMode.skillsContainer} id="skill_id">
            <div className={SkillMode.styling}>
                <h1 className="heading"> My Skills</h1>
                <div className={Arrow.down} id="#resume"><a href="#resume"><div className="ball"><img className="pointing-finger" src="/img/hand.png" alt="expand button" /></div></a></div>

                <p className="full-stack">FULL STACK DEVELOPER THAT LOVES EXPLORING STACKS</p>
                </div>
                <h3 className="language">Languages and Tools:</h3>
                
            <p>
                🎯 Develop highly interactive Front end / User Interfaces for your web and mobile applications <br />
                🎯 Progressive Web Applications ( PWA ) in normal and SPA Stacks <br />
                🎯 Integration of third party services such as MongoDB/ Heroku / Vercel 
            </p>

            <div className={SkillMode.appContainer}>
            <p>
                    <a href="https://getbootstrap.com" target="_blank"> <img className={SkillMode.imgContainer} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40" /> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img className={SkillMode.imgContainer} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" /> </a> <a href="https://expressjs.com" target="_blank"> <img className={SkillMode.imgContainer} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40" /> </a> <a href="https://git-scm.com/" target="_blank"> <img className={SkillMode.imgContainer} src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40" /> </a> <a href="https://heroku.com" target="_blank"> <img className={SkillMode.imgContainer} src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40" /> </a>
                    <a href="https://www.w3.org/html/" target="_blank"> <img className={SkillMode.imgContainer} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" /> </a> <a href="https://www.adobe.com/in/products/illustrator.html" target="_blank"> <img className={SkillMode.imgContainer} src="https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg" alt="illustrator" width="40" height="40" /> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img className={SkillMode.imgContainer} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" /> </a> <a href="https://www.mongodb.com/" target="_blank"> <img className={SkillMode.imgContainer} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40" /> </a> <a href="https://nodejs.org" target="_blank"> <img className={SkillMode.imgContainer} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40" /> </a> 
                    <a href="https://www.photoshop.com/en" target="_blank"> <img className={SkillMode.imgContainer} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-line.svg" alt="photoshop" width="40" height="40" /> </a> <a href="https://postman.com" target="_blank"> <img className={SkillMode.imgContainer} src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40" /> </a> <a href="https://reactjs.org/" target="_blank"> <img className={SkillMode.imgContainer} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40" /> </a> <a href="https://sass-lang.com" target="_blank"> <img className={SkillMode.imgContainer} src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40" /> </a> <a href="https://www.adobe.com/products/xd.html" target="_blank"> <img className={SkillMode.imgContainer} src="https://cdn.worldvectorlogo.com/logos/adobe-xd.svg" alt="xd" width="40" height="40" /> </a>
            </p>
            </div>

        </div>
     );
}
 
export default Skills;