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
  { id: 'patient7', name: 'Admiral', 'avatar': 6, },
  { id: 'patient8', name: 'Buldog', 'avatar': 7, },
  { id: 'patient9', name: 'Arise', 'avatar': 8, },
  { id: 'patient10', name: 'Eternal Envy', 'avatar': 9, },
  { id: 'patient11', name: 'Cancel', 'avatar': 10, },
  { id: 'patient12', name: 'Lenovo', 'avatar': 11, },
  { id: 'patient13', name: 'Hp', 'avatar': 12, },
  { id: 'patient14', name: 'Tim Berners Lee', 'avatar': 13, },
  { id: 'patient15', name: 'Somenone Popular', 'avatar': 14, },
  { id: 'patient16', name: 'Who', 'avatar': 15, },
  { id: 'patient17', name: 'Me', 'avatar': 16, },
  { id: 'patient18', name: 'Jin Lou', 'avatar': 17, },
  { id: 'patient19', name: 'Zhou Wiz', 'avatar': 18, },
  { id: 'patient20', name: 'Blue Air', 'avatar': 19, },
  { id: 'patient21', name: 'Meh', 'avatar': 20, },
  { id: 'patient22', name: 'Run Forest', 'avatar': 21, },
  { id: 'patient23', name: 'Stop', 'avatar': 22, },
  { id: 'patient24', name: 'Romania', 'avatar': 23, },
  { id: 'patient25', name: 'Democracy', 'avatar': 24, },
  { id: 'patient26', name: 'Justice', 'avatar': 25, },
  { id: 'patient27', name: 'System', 'avatar': 26, },
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
    const patients = search(this.state.searchTerm, this.state.patients, 'name');

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
