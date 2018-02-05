import React from 'react';
import { Menu, Segment, Tab } from 'semantic-ui-react';

import BuildingPlan from 'modules/building-plan';

import './blueprints.style.scss';

const panes = [
  { menuItem: 'Ground floor', render: () => <Tab.Pane attached={false}><BuildingPlan /></Tab.Pane> },
  { menuItem: '1st floor', render: () => <Tab.Pane attached={false}>1st floor</Tab.Pane> },
  { menuItem: '2nd floor', render: () => <Tab.Pane attached={false}>2nd floor</Tab.Pane> },
  { menuItem: '3rd floor', render: () => <Tab.Pane attached={false}>3rd floor</Tab.Pane> },
  { menuItem: '4th floor', render: () => <Tab.Pane attached={false}>4th floor</Tab.Pane> },
];

const Blueprints = () => {
  return (
    <div className='blueprints'>
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </div>
  );
};

Blueprints.displayName = 'Blueprints';
export default Blueprints;

