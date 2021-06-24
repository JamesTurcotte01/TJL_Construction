import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import FreeQuote from './components/pages/FreeQuote';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/free-quote' component={FreeQuote} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
