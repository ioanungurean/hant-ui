import React from 'react';
import { Input, Menu, Button, Dropdown } from 'semantic-ui-react';

import './header.style.scss';

import logo from 'assets/images/logo.svg';

const Header = (props) => {
  const { activeItem, handleItemClick } = props;

  return (
    <div className='header'>
      <Menu stackable>
        <Menu.Item>
          <img src={logo} />
        </Menu.Item>
        <Menu.Item header>
          Hazard Smart Assistant
        </Menu.Item>

        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};

Header.displayName = 'Header';
export default Header;
