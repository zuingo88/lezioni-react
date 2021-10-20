import React from "react";
import About from "./About";
import Home from "./Home";
import ErrorPage from './ErrorPage';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const index = () => {
  return (
    <Router>
      <h1>React Router</h1>
      <ul className='nav'>
        <li className='nav-item'>
          <Link to="/" className='nav-link'>Home</Link>
        </li>
        <li className='nav-item'>
          <Link to="/About" className='nav-link'>About</Link>
        </li>
        <li className='nav-item'>
          <Link to="/Progetti" className='nav-link'>Progetti</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About' component={About} />
        <Route path='*' component={ErrorPage} />
      </Switch>
    </Router>

  );
};

export default index;
