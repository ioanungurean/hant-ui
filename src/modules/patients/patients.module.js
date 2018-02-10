import React, { Component } from 'react';
import { Icon, Image, Button } from 'semantic-ui-react';

import search from 'libs/search';
import List from 'components/list';

import './patients.style.scss';

const patients = [
  { id: 'patient1', name: 'John Doe', 'avatar': 1, },
  { id: 'patient2', name: 'Spiderman', 'avatar': 2, },
  { id: 'patient3', name: 'Superman', 'avatar': 3, },
  { id: 'patient4', name: 'Someone', 'avatar': 4, },
  { id: 'patient5', name: 'Thor', 'avatar': 5, },
  { id: 'patient6', name: 'Miracle', 'avatar': 6, },
];

class Patients extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '', patients: [], };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      patients: patients
    });
  }

  handleChange(event) {
    this.setState({ searchTerm: event.target.value });
    event.stopPropagation();
  }

  renderPatient(patient) {
    const randomNumber = Math.floor(Math.random() * 20);
    return (
      <div key={patient.id} className='item'>
        <div className='right floated content'>
          <Button>More Details</Button>
        </div>
        <Image avatar src={`https://randomuser.me/api/portraits/thumb/men/${patient.avatar}.jpg`} />
        <div className='content'>
          <div className='header'>{patient.name}</div>
        </div>
      </div>
    );
  }

  render() {
    const patients = search(this.state.searchTerm, this.state.patients);

    return (
      <div className='patients'>
        <div className='ui medium header patients__header'>Patients</div>
        <div className='ui input'>
          <input value={this.state.searchTerm} onChange={this.handleChange} type='text' placeholder='Search...' />
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
