import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About';
import Services from '../Services/Services';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/who-we-are" component={About} />
      <Route path="/services" component={Services} />
    </Switch>
  </main>
);

export default Main;