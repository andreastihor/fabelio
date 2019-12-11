import React , {Component} from 'react';
import {Route, Switch } from 'react-router-dom';

import Home from './home';
import Products from './products'
import DetailPost from './detailPost'

class Routing extends Component {
  render () {
    return (
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/list" component={Products} exact />
        <Route path="/detailPost" component={DetailPost} exact />
      </Switch>
    )
  }
}

export default Routing
