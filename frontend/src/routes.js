import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Formu from './formu';

export default class routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/formu" exact component={Formu} />
      </Switch>
    );
  }
}