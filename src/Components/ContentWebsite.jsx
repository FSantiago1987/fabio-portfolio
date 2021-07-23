import React from 'react';
import HomePage from '../Pages/HomePage'
import AboutPage from '../Pages/AboutPage';
import ExperiencesPage from '../Pages/ExperiencesPage';
import PortfolioPage from '../Pages/PorfolioPage';
import BlogsPage from '../Pages/BlogsPage';
import ContactPage from '../Pages/ContactPage';
import NavBar from './NavBar';
import {Switch, Route} from 'react-router-dom';

function ContentWebsite() {
    return (
      <div className="ContentWebsite">
        <div className="sidebar">
          <NavBar />
        </div>
        <div className="main-content">
          <div className="content">
            <Switch>
              <Route path="/home" exact component={HomePage} />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/experiences" exact component={ExperiencesPage} />
              <Route path="/portfolio" exact component={PortfolioPage} />
              <Route path="/blogs" exact component={BlogsPage} />
              <Route path="/contacts" exact component={ContactPage} />
            </Switch>
          </div>
        </div>
      </div>
    );
}

export default ContentWebsite;
