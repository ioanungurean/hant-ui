import React, { Component, Fragment } from 'react';
import { Menu, Tab, Icon } from 'semantic-ui-react';

import List from 'components/list';

import BuildingPlan from 'modules/building-plan';
import './blueprints.style.scss';

const sensors = {
  'room1': [
    { id: 'sensor1', name: 'Smoke sensor room1' },
    { id: 'sensor2', name: 'Leakage sensor room1' },
    { id: 'sensor3', name: 'Some sensor room1' },
  ],
  'room2': [
    { id: 'sensor1', name: 'Smoke sensor room2' },
    { id: 'sensor2', name: 'Leakage sensor room2' },
    { id: 'sensor3', name: 'Some sensor room2' },
  ],
};

class Blueprints extends Component {
  constructor(props) {
    super(props);
    this.state = { idRoomClicked: null, sensors: null, };
    this.roomClicked = this.roomClicked.bind(this);
    this.filterSensors = this.filterSensors.bind(this);
    this.renderSensor = this.renderSensor.bind(this);
  }

  roomClicked(id) {
    this.setState({
      idRoomClicked: id,
      sensors: this.filterSensors(id),
    });
  }

  filterSensors(roomId) {
    return sensors[roomId] || [];
  }

  renderSensor(sensor) {
    return (
      <div key={sensor.id} className='item'>
        <Icon className='big' name='microchip' />
        <div className='content'>
          <div className='header'>{sensor.name}</div>
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
              {this.filterSensors(this.state.idRoomClicked).map(this.renderSensor) }
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

