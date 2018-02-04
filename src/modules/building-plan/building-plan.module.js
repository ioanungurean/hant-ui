import React, { Component } from 'react';

import './building-plan.style.scss';

class BuildingPlan extends Component {
  render() {
    return (
      <div className="building-plan">
        <div className="building-plan__room">room1</div>
        <div className="building-plan__room">room2</div>
        <div className="building-plan__room">room3</div>
        <div className="building-plan__room">room4</div>
        <div className="building-plan__room--hallway3">hallway</div>
        <div className="building-plan__room">room6</div>
        <div className="building-plan__room">room7</div>
        <div className="building-plan__room">room8</div>
        <div className="building-plan__room">room9</div>
        <div className="building-plan__room--hallway1">hallway</div>
        <div className="building-plan__room--hallway2">hallway</div>
        <div className="building-plan__room">room10</div>
        <div className="building-plan__room">room11</div>
        <div className="building-plan__room">room12</div>
        <div className="building-plan__room">room13</div>
        <div className="building-plan__room">room14</div>
        <div className="building-plan__room">room15</div>
        <div className="building-plan__room">room16</div>
        <div className="building-plan__room">room17</div>
      </div>
    );
  }
}

BuildingPlan.displayName = 'BuildingPlan';
export default BuildingPlan;
