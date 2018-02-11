import React, { Component, Fragment } from 'react';
import { Menu, Tab, Icon } from 'semantic-ui-react';

import List from 'components/list';

import BuildingPlan from 'modules/building-plan';
import './blueprints.style.scss';

class Blueprints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idRoomClicked: null,
      filteredSensors: null,
      devices: props.devices,
    };
    this.roomClicked = this.roomClicked.bind(this);
    this.filterSensors = this.filterSensors.bind(this);
    this.renderSensor = this.renderSensor.bind(this);
    this.parseDevices = this.parseDevices.bind(this);
  }

  componentDidMount() {
    this.parseDevices(this.props.devices);
  }

  componentWillReceiveProps(nexProps) {
    this.parseDevices(nexProps.devices);
  }

  parseDevices(devices) {
    let parsedDevicesObj = {};
    devices.forEach((device) => { parsedDevicesObj[`room${device.deviceId % 100}`] = []; });
    devices.forEach((device) => { parsedDevicesObj[`room${device.deviceId % 100}`].push(device); });

    this.setState({
      devices: parsedDevicesObj,
    });
  }

  roomClicked(id) {
    this.setState({
      idRoomClicked: id,
      filteredSensors: this.filterSensors(id),
    });
  }

  filterSensors(roomId) {
    return this.state.devices[roomId] || [];
  }

  renderSensor(sensor) {
    return (
      <div key={sensor.deviceId} className='item'>
        <Icon className='big' name='microchip' />
        <div className='content'>
          <div className='header'>
            <span className='header__title'>{sensor.deviceName}: &emsp;</span>
            {sensor.humidityLevel && (<span className='blueprints__plan__list__label'>Humididty Level: {sensor.humidityLevel} &emsp;</span> )}
            {sensor.waterLevel && (<span className='blueprints__plan__list__label'>Water Level: {sensor.waterLevel} &emsp;</span> )}
            {sensor.lightLevel && (<span className='blueprints__plan__list__label'>Light Level: {sensor.lightLevel} &emsp;</span> )}
            {sensor.luminosity && (<span className='blueprints__plan__list__label'>Luminosity: {sensor.luminosity} &emsp;</span> )}
            {sensor.disturbanceLevel && (<span className='blueprints__plan__list__label'>Disturbance Level: {sensor.disturbanceLevel} &emsp;</span> )}
            {sensor.motionDetected && (<span className='blueprints__plan__list__label'>Motion Detected: {sensor.motionDetected} &emsp;</span> )}
            {sensor.temperature && (<span className='blueprints__plan__list__label'>Temperature: {sensor.temperature} °C &emsp;</span> )}
            {sensor.teperature && (<span className='blueprints__plan__list__label'>Temperature: {sensor.teperature} °C &emsp;</span> )}
            {sensor.co2 && (<span className='blueprints__plan__list__label'>CO2 Level: {sensor.co2} &emsp;</span> )}
            {sensor.decisionVariables && (<span className='blueprints__plan__list__label'>Decision Variable: {sensor.decisionVariables} &emsp;</span> )}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const panes = [
      {
        menuItem: 'Ground floor', render: () =>
          <div className="blueprints__plan">
            <BuildingPlan roomClicked={this.roomClicked} />

            <div className="ui medium header blueprints__plan__header">
              {
                this.state.idRoomClicked
                  ? (<Fragment>All sensors in <span style={{ color: '#2185d0' }}>{this.state.idRoomClicked}</span>:</Fragment>)
                  : (<Fragment>Please click on a room above...</Fragment>)
              }
            </div>
            <List type='divided'>
              {this.filterSensors(this.state.idRoomClicked).map(this.renderSensor)}
            </List>
          </div>
      },
      { menuItem: '1st floor', render: () => <div className='blueprints__plan'>1st floor</div> },
      { menuItem: '2nd floor', render: () => <div className='blueprints__plan'>2nd floor</div> },
      { menuItem: '3rd floor', render: () => <div className='blueprints__plan'>3rd floor</div> },
      { menuItem: '4th floor', render: () => <div className='blueprints__plan'>4th floor</div> },
    ];

    return (
      <Tab className='blueprints' menu={{ secondary: true, pointing: true }} panes={panes} />
    );
  }
}

Blueprints.displayName = 'Blueprints';
export default Blueprints;

