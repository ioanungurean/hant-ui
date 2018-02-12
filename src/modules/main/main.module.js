import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Segment } from 'semantic-ui-react';

import Blueprints from 'modules/blueprints';
import Patients from 'modules/patients';
import Sensors from 'modules/sensors';
import Statistics from 'modules/statistics';
import Logs from 'modules/logs';

import './main.style.scss';

const propsComponent = (Component, props) => {
  return () => (
    <Component {...props} />
  );
}

const Main = (props) => {
  return (
    <Segment className='main'>
      <Switch>
        <Route exact path='/' component={propsComponent(Blueprints, { devices: props.devices })} />
        <Route path='/patients' component={propsComponent(Patients, { patients: props.patients })} />
        <Route path='/sensors' component={propsComponent(Sensors, { devices: props.devices })} />
        <Route path='/statistics' component={Statistics} />
        <Route path='/logs' component={Logs} />
      </Switch>
    </Segment>
  );
};

Main.displayName = 'Main';
export default Main;
