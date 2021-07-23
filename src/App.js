import WelcomePage from './Pages/WelcomePage';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ExperiencesPage from './Pages/ExperiencesPage';
import PortfolioPage from './Pages/PorfolioPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import NavBar from '../src/Components/NavBar';
import './App.scss';
import {Switch, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  function navClick(){
    setNavToggle(!navToggle);
  }
  return (
    <div className="App">
            <Switch>
              <Route path="/" exact component={WelcomePage} />
              <div className="contentPage">
                <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
                  <NavBar />
                </div>
                <div className="nav-btn" onClick={navClick}>
                  <div className="line-1"></div>
                  <div className="line-2"></div>
                  <div className="line-3"></div>
                </div>
                <div className="main-content">
                  <div className="content"> 
                    <Route path="/home" exact component={HomePage} />
                    <Route path="/about" exact component={AboutPage} />
                    <Route path="/experiences" exact component={ExperiencesPage} />
                    <Route path="/portfolio" exact component={PortfolioPage} />
                    <Route path="/blogs" exact component={BlogsPage} />
                    <Route path="/contacts" exact component={ContactPage} />
                  </div>
                </div>  
              </div>
            </Switch>
        </div>

  );
}

export default App;
