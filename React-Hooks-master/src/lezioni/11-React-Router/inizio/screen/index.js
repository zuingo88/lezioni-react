import React from "react";
import Home from "./Home";
import About from "./About";
import Progetti from "./Progetti";
import SingleProgetto from "./SingleProgetto";
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
        <Route path='/about' component={About} />
        <Route path='/progetti' component={Progetti} />
        {<Route path='/progetto/:id' component={SingleProgetto} /> /* Dopo i due puntio posso aggiungere un parametro (id) */}
        <Route path='*' component={ErrorPage} />
      </Switch>
    </Router>

  );
};

export default index;
