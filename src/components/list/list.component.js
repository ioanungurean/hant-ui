import React from 'react';
import { Icon } from 'semantic-ui-react';

import './list.style.scss';

const List = (props) => {
  const title = props.idRoomClicked
    ? `All sensor in ${props.idRoomClicked}:`
    : 'Please click on a room to see all the sensors that are installed in that room!';

  return (
    <div className='ui middle aligned selection list'>
      <div className="ui medium header list__header">{title}</div>
      <div className='item'>
        <Icon className='big' name='microchip' />
        <div className='content'>
          <div className='header'>Smoke sensor</div>
        </div>
      </div>
      <div className='item'>
        <Icon className='big' name='microchip' />
        <div className='content'>
          <div className='header'>Leakage sensor</div>
        </div>
      </div>
      <div className='item'>
        <Icon className='big' name='microchip' />
        <div className='content'>
          <div className='header'>Fucking sensor</div>
        </div>
      </div>
    </div>
  );
};

List.displayName = 'List';
export default List;
