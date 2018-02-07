import React, { Component, Fragment } from 'react';
import { Menu, Tab } from 'semantic-ui-react';

import List from 'components/list';

import BuildingPlan from 'modules/building-plan';
import './blueprints.style.scss';

class Blueprints extends Component {
  constructor(props) {
    super(props);

    this.state = { idRoomClicked: null };
    this.roomClicked = this.roomClicked.bind(this);
  }

  roomClicked(id) {
    this.setState({
      idRoomClicked: id,
    });
  }

  render() {
    const panes = [
      {
        menuItem: 'Ground floor', render: () =>
          <div className="blueprints__plan">
            <BuildingPlan roomClicked={this.roomClicked} />

            <List idRoomClicked={this.state.idRoomClicked} />
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
};

Blueprints.displayName = 'Blueprints';
export default Blueprints;

