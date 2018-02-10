import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react';

import search from 'libs/search';
import List from 'components/list';

import './sensors.style.scss';

const sensors = [
  { id: 'sensor1', name: 'Smoke sensor room1', },
  { id: 'sensor2', name: 'Smoke sensor room2', },
  { id: 'sensor3', name: 'Smoke sensor room3', },
  { id: 'sensor4', name: 'Smoke sensor room4', },
  { id: 'sensor5', name: 'Smoke sensor room5', },
  { id: 'sensor6', name: 'Smoke sensor room6', },
];

class Patients extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '', sensors: [], };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      sensors: sensors
    });
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
    event.stopPropagation();
  }

  renderSensor(sensor) {
    const randomNumber = Math.floor(Math.random() * 20);
    return (
      <div key={sensor.id} className='item'>
        <div className='right floated content'>
          <Button>More Details</Button>
        </div>
        <Icon className='big' name='microchip' />
        <div className='content'>
          <div className='header'>{sensor.name}</div>
        </div>
      </div>
    );
  }

  render() {
    const sensors = search(this.state.searchTerm, this.state.sensors)

    return (
      <div className='sensors'>
        <div className='ui medium header patients__header'>Patients</div>
        <div className='ui input'>
          <input value={this.state.searchTerm} onChange={this.handleChange} type='text' placeholder='Search...' />
        </div>
        <List type='divided'>
          {sensors.map(this.renderSensor)}
        </List>
      </div>
    );
  }
}

Patients.displayName = 'Patients';
export default Patients;
