import React, { Component } from 'react';
import axios from 'axios';

import { Grid } from 'semantic-ui-react';

import Header from 'components/header';
import Main from 'modules/main';
import Sidebar from 'components/sidebar';

import 'semantic-ui-css/semantic.min.css';
import './app.style.scss';

const getDevices = () => {
  return axios.post('https://localhost:8443/getDevices', {});
};

const getPatients = () => {
  return axios.post('https://localhost:8443/getPatients', {});
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'blueprints',
      devices: [],
      patients: [],
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount() {
    getDevices().then((response) => {
      this.setState({
        devices: response.data,
      });
    })
      .catch((error) => {
        console.error(error);
      });

    getPatients().then((response) => {
      this.setState({
        patients: response.data,
      });
    })
      .catch((error) => {
        console.error(error);
      });
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
          <Main devices={this.state.devices} patients={this.state.patients} />
        </div>
      </div>
    );
  }
}

App.displayName = 'App';
export default App;
