import React from "react";
import About from "./About";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const index = () => {
  return (
    <Router>
      <h1>React Router</h1>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/About' component={About} />
      </Switch>
    </Router>

  );
};

export default index;
