import React, { Component } from 'react';
import { sortBy } from 'underscore';
import { Icon, Image, Button } from 'semantic-ui-react';

import search from 'libs/search';
import List from 'components/list';

import './patients.style.scss';

class Patients extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '', patients: [], };
    this.handleChange = this.handleChange.bind(this);
    this.evacuationOrdering = this.evacuationOrdering.bind(this);
  }

  componentDidMount() {
    this.setState({
      patients: this.props.patients,
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      patients: nextProps.patients,
    });
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
    event.stopPropagation();
  }

  renderPatient(patient) {
    const randomNumber = Math.floor(Math.random() * 1000);
    return (
      <div key={`${patient.idPerson}${randomNumber + Math.floor(Math.random() * 1000)}${Math.floor(Math.random() * 1000)}`} className='item'>
        <div className='right floated content'>
          <Button>More Details</Button>
        </div>
        <Image avatar src={`https://randomuser.me/api/portraits/thumb/men/${patient.idPerson}.jpg`} />
        <div className='content'>
          <div className='header'>
            Patient {patient.idPerson} &emsp;
            {patient.cameraID && (<span className='sensors__details +dimmed'>Room : {patient.cameraID} &emsp;</span>)}
          </div>

        </div>
      </div>
    );
  }

  evacuationOrdering() {
    this.setState((prevState) => ({
      patients: sortBy(prevState.patients, 'evacPriority'),
    }));
  }

  render() {
    const patients = search(this.state.searchTerm, this.state.patients, 'idPerson');

    return (
      <div className='patients'>
        <div className='ui medium header patients__header'>Patients</div>
        <div className='ui input'>
          <input value={this.state.searchTerm} onChange={this.handleChange} type='text' placeholder='Search...' />
          <div className='patients__search__button'>
            <Button onClick={this.evacuationOrdering}>Show Evacuation Order</Button>
          </div>
        </div>
        <List type='divided'>
          {patients.map(this.renderPatient)}
        </List>
      </div>
    );
  }
}

Patients.displayName = 'Patients';
export default Patients;
