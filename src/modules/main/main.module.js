import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Segment } from 'semantic-ui-react';

import Blueprints from 'modules/blueprints';
import Patients from 'modules/patients';
import Sensors from 'modules/sensors';
import Statistics from 'modules/statistics';
import Logs from 'modules/logs';

import './main.style.scss';

const Main = (props) => {
  return (
    <Segment className='main'>
      <Switch>
        <Route exact path='/' component={Blueprints} />
        <Route path='/patients' component={Patients} />
        <Route path='/sensors' component={Sensors} />
        <Route path='/statistics' component={Statistics} />
        <Route path='/logs' component={Logs} />
      </Switch>
    </Segment>
  );
};

Main.displayName = 'Main';
export default Main;
