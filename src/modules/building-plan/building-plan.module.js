import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './building-plan.style.scss';

const rooms = [
  { id: 'room1', label: 'Room 1' }, { id: 'room2', label: 'Room 2' }, { id: 'room3', label: 'Room 3' },
  { id: 'room4', label: 'Room 4' }, { id: 'room5', label: 'Hallway 3' }, { id: 'room6', label: 'Room 6' },
  { id: 'room7', label: 'Room 7' }, { id: 'room8', label: 'Room 8' }, { id: 'room9', label: 'Room 9' },
  { id: 'room10', label: 'Hallway 1' }, { id: 'room11', label: 'Hallway 2' }, { id: 'room12', label: 'Room 12' },
  { id: 'room13', label: 'Room 13' }, { id: 'room14', label: 'Room 14' }, { id: 'room15', label: 'Room 15' },
  { id: 'room16', label: 'Room 16' }, { id: 'room17', label: 'Room 17' }, { id: 'room18', label: 'Room 18' },
  { id: 'room19', label: 'Room 19' },
];

class BuildingPlan extends Component {
  constructor(props) {
    super(props);
    this.state = { idRoomClicked: null };
    this.renderRoom = this.renderRoom.bind(this);
    this.roomClicked = this.roomClicked.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        alarm: rooms[Math.floor(Math.random() * rooms.length)].id,
      }, () => {
        console.log('Updating', this.state.alarm);
      });
    }, 10000);
  }

  renderRoom(room, index) {
    const label = room.label.toLowerCase();
    const isClicked = this.state.idRoomClicked === room.id ? ' +isactive' : ``;
    const isAlarm = this.state.alarm === room.id ? ' +isalarm' : ``;
    const isHallway = label.indexOf('hallway') !== -1 ? `--${room.id}` : '';
    const className = `building-plan__room${isHallway}${isClicked}${isAlarm}`;

    return (
      <div
        key={room.id}
        className={className}
        id={room.id}
      >
        {room.label}
      </div>
    );
  }

  roomClicked(event) {
    if (event.target.id === '') return;

    const idRoomClicked = event.target.id === this.state.idRoomClicked ? null : event.target.id;
    this.setState({
      idRoomClicked: idRoomClicked
    }, () => {
      this.props.roomClicked(this.state.idRoomClicked);
    });
    event.stopPropagation();
  }

  render() {
    return (
      <div className='building-plan' onClick={this.roomClicked}>
        { rooms.map((room, index) => this.renderRoom(room, index)) }
      </div>
    );
  }
}

BuildingPlan.displayName = 'BuildingPlan';
BuildingPlan.protoTypes = {
  roomClicked: PropTypes.func.isRequired,
};

export default BuildingPlan;
