import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

// COHORT COMPONENT CODE GOES HERE
class Cohort extends React.Component {
  constructor(props) {
    super(props);
    this.state = props
  }

  render() {
    console.log('state from cohort: ', this.state)
    return (
//iterates over array of people and renders a person component based on the information
      <div>
        {this.state.staff.map((person, i) =>
        <Person className="idCard" teacher={this.state.staff[i]} />)}
        <br />
      </div>
    );
  }
}

export default Cohort;
