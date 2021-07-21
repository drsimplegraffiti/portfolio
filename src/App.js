
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Resume from './Resume';
import Services from './Services';
import Blogs from './Blogs';
import Portfolio from './Portfoliio';
import Contact from './Contact';
import Aside from './Aside';
// import Designs from './Designs';


function App() {
  return (
    <Router>
      <div className="App">

{/* <BounceLoader size={ 6} color='#f8a800' loading/> <br />  */}
      <Header />
   
        <Switch>
              <Route path="/" exact component={Aside} />
              <Route path="/resume" exact component={Resume} />
              <Route path="/blogs"  exact component={ Blogs}/>
          <Route path="/services" exact component={Services} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
          {/* <Route path="/designs" exact component={Designs} /> */}
          </Switch>
        <Footer />
      </div>
      </Router>

      
    );
}

export default App;