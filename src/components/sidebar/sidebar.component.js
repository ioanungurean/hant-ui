import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, Segment, Icon } from 'semantic-ui-react';

import './sidebar.style.scss';

const Sidebar = (props) => {
  const { activeItem, handleItemClick } = props;

  return (
    <div className="sidebar">
      <Menu pointing vertical>
        <Menu.Item as={Link} to='/' name='blueprints' active={activeItem === 'blueprints'} onClick={handleItemClick}>
          <Icon name='object group' /> Blueprints
        </Menu.Item>
        <Menu.Item as={Link} to='/patients' name='patients' active={activeItem === 'patients'} onClick={handleItemClick}>
          <Icon name='users' /> Patients
        </Menu.Item>
        <Menu.Item as={Link} to='/sensors' name='sensors' active={activeItem === 'sensors'} onClick={handleItemClick}>
          <Icon name='microchip' /> Sensors
        </Menu.Item>
        <Menu.Item as={Link} to='/statistics' name='statistics' active={activeItem === 'statistics'} onClick={handleItemClick}>
          <Icon name='pie graph' /> Statistics
        </Menu.Item>
        <Menu.Item as={Link} to='/logs' name='logs' active={activeItem === 'logs'} onClick={handleItemClick}>
          <Icon name='unordered list' /> Logs
        </Menu.Item>
      </Menu>
    </div>
  );
};

Sidebar.displayName = 'Sidebar';
Sidebar.propTypes = {};

export default Sidebar;
