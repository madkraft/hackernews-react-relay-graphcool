import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import '../styles/App.css';

import CreateLink from './CreateLink';
import Header from './Header';
import LinkListPage from './LinkListPage';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path='/' component={LinkListPage} />
          <Route exact path='/create' component={CreateLink} />
        </Switch>
      </>
    );
  }
}

export default App;
