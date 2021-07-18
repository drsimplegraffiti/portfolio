
// import { BounceLoader } from 'react-spinners';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Resume from './Resume';
import Services from './Services';
import Blogs from './Blogs';
import Portfolio from './Portfoliio';
import Contact from './Contact';
import Aside from './Aside';






function App() {
  return (
    <Router>
      <div className="App">
{/* <BounceLoader size={ 24} color='#f8a800' loading/> <br />
<BounceLoader size={ 12} color='#f8a800' loading/> <br />
<BounceLoader size={ 6} color='#f8a800' loading/> <br /> */}
      <Header />
   
        <Switch>
              <Route path="/" exact component={Aside} />
              <Route path="/resume" exact component={Resume} />
              <Route path="/blogs" component={ Blogs}/>
          <Route path="/services" component={Services} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          </Switch>
        <Footer />
      </div>
      </Router>

      
    );
}

export default App;