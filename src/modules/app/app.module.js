import React, { Component } from 'react';

import Header from 'components/header';
import Sidebar from 'components/sidebar';
import BuildingPlan from 'modules/building-plan';

import './app.style.scss';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Sidebar />
        <BuildingPlan />
      </div>
    );
  }
}

App.displayName = 'App';
export default App;
