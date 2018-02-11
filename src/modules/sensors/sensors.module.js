import React, { Component } from 'react';
import { Icon, Button } from 'semantic-ui-react';

import search from 'libs/search';
import List from 'components/list';

import './sensors.style.scss';

class Sensors extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '', devices: props.devices, };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      devices: this.props.devices
    });
  }

  componentWillReceiveProps(nexProps) {
    this.setState({
      devices: this.props.devices
    });
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
    event.stopPropagation();
  }

  renderSensor(sensor) {
    const randomNumber = Math.floor(Math.random() * 20);
    return (
      <div key={sensor.deviceId} className='item'>
        <div className='right floated content'>
          <Button>More Details</Button>
        </div>
        <Icon className='big' name='microchip' />
        <div className='content'>
          <div className='header'>
            <span className='header__title'>{sensor.deviceName}: &emsp;</span>
            {sensor.humidityLevel && (<span className='sensors__details +dimmed'>Humididty Level: {sensor.humidityLevel} &emsp;</span>)}
            {sensor.waterLevel && (<span className='sensors__details +dimmed'>Water Level: {sensor.waterLevel} &emsp;</span>)}
            {sensor.lightLevel && (<span className='sensors__details +dimmed'>Light Level: {sensor.lightLevel} &emsp;</span>)}
            {sensor.luminosity && (<span className='sensors__details +dimmed'>Luminosity: {sensor.luminosity} &emsp;</span>)}
            {sensor.disturbanceLevel && (<span className='sensors__details +dimmed'>Disturbance Level: {sensor.disturbanceLevel} &emsp;</span>)}
            {sensor.motionDetected && (<span className='sensors__details +dimmed'>Motion Detected: {sensor.motionDetected} &emsp;</span>)}
            {sensor.temperature && (<span className='sensors__details +dimmed'>Temperature: {sensor.temperature} °C &emsp;</span>)}
            {sensor.teperature && (<span className='sensors__details +dimmed'>Temperature: {sensor.teperature} °C &emsp;</span>)}
            {sensor.co2 && (<span className='sensors__details +dimmed'>CO2 Level: {sensor.co2} &emsp;</span>)}
            {sensor.decisionVariables && (<span className='sensors__details +dimmed'>Decision Variable: {sensor.decisionVariables} &emsp;</span>)}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const sensors = search(this.state.searchTerm, this.state.devices, 'deviceName');

    return (
      <div className='sensors'>
        <div className='ui medium header patients__header'>Sensors</div>
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

Sensors.displayName = 'Sensors';
export default Sensors;
