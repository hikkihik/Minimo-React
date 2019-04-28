import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Header from './components/Header';
import Home from './pages/Home';
import SinglePostFullWidth from './pages/SinglePostFullWidth';
import SinglePostSidebar from './pages/SinglePostSidebar';
import Footer from './components/Footer'; 

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/single-post-full-width" component={SinglePostFullWidth} />
              <Route path="/single-post-sidebar" component={SinglePostSidebar} />
            </Switch>
            <Footer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
