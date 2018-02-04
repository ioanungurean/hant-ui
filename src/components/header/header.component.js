import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './header.style.scss';

class Header extends Component {
  render() {
    return (
      <div className="header">
        Header
      </div>
    );
  }
};

Header.displayName = 'Header';
Header.propTypes = {};

export default Header;
