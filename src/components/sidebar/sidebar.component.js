import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './sidebar.style.scss';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        Sidebar
      </div>
    );
  }
};

Sidebar.displayName = 'Sidebar';
Sidebar.propTypes = {};

export default Sidebar;
