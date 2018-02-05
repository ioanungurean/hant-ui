import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import Header from 'components/header';
import Main from 'modules/main';
import Sidebar from 'components/sidebar';

import 'semantic-ui-css/semantic.min.css';
import './app.style.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'blueprints' };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;
    return (
      <div className='app'>
        <Header activeItem={activeItem} handleItemClick={this.handleItemClick} />

        <div className='app__content'>
          <Sidebar activeItem={activeItem} handleItemClick={this.handleItemClick} />
          <Main />
        </div>
      </div>
    );
  }
}

App.displayName = 'App';
export default App;
