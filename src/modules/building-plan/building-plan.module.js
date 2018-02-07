import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './building-plan.style.scss';

class BuildingPlan extends Component {
  constructor(props) {
    super(props);

    this.state = { idRoomClicked: null };
    this.renderRoom = this.renderRoom.bind(this);
    this.roomClicked = this.roomClicked.bind(this);
  }

  renderRoom(room, index) {
    const isClicked = this.state.idRoomClicked === room ? ' +isactive' : ``;
    const isHallway = room.indexOf('hallway') !== -1 ? `--${room}` : '';
    const className = `building-plan__room${isHallway}${isClicked}`;

    return (
      <div
        key={room}
        className={className}
        id={room}
      >
        {room}
      </div>
    );
  }

  roomClicked(e) {
    if (e.target.id === '') return;

    const idRoomClicked = e.target.id === this.state.idRoomClicked ? null : e.target.id;
    this.setState({
      idRoomClicked: idRoomClicked
    }, () => {
      this.props.roomClicked(this.state.idRoomClicked);
    });
    e.stopPropagation();
  }

  render() {
    const roomArr = [
      'room1', 'room2', 'room3', 'room4', 'hallway3', 'room5', 'room6', 'room7', 'room8', 'hallway1',
      'hallway2', 'room9', 'room10', 'room11', 'room12', 'room13', 'room14', 'room15', 'room16',
    ];

    return (
      <div className='building-plan' onClick={this.roomClicked}>
        { roomArr.map((room, index) => this.renderRoom(room, index)) }
      </div>
    );
  }
}

BuildingPlan.displayName = 'BuildingPlan';
BuildingPlan.protoTypes = {
  roomClicked: PropTypes.func.isRequired,
};
export default BuildingPlan;
