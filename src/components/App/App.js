import React, { Component } from 'react';
import Cohort from '../Cohort/Cohort';
import Form from '../Form/Form';
import people from '../../data/yearbook-data.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  render() {
    console.log('people: ', this.state.staff)
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      </header>
        <h2>Staff</h2>
      <div className="staff">
        <Cohort staff={this.state.staff}/>
      </div>
        <h2>Students</h2>
      <div className="students">
        <Cohort students={this.state.students}/>
      </div>
      <div className="form">
        <Form />
      </div>
      </div>
    );
  }
}

export default App;
