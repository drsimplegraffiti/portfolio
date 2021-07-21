import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Lines } from 'react-preloaders2';
import Header from './Header';
import Footer from './Footer';
import Resume from './Resume';
import Services from './Services';
import Blogs from './Blogs';
import Portfolio from './Portfoliio';
import Contact from './Contact';
import Aside from './Aside';
import Design from './Design';

function App() {
  return (
    <Router>
      <div className="App">

{/* <BounceLoader size={ 6} color='#f8a800' loading/> <br />  */}
      <Header />
        <Switch>
              <Route path="/" exact component={Aside} />
          <Route path="/designs" exact component={Design} />
              <Route path="/resume" exact component={Resume} />
              <Route path="/blogs"  exact component={ Blogs}/>
          <Route path="/services" exact component={Services} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Lines />
        <Footer />
      </div>
      </Router>

      
    );
}

export default App;