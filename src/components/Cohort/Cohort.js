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

      <div className="person">
        {this.state.staff.map((person, i) =>
        <Person teacher={this.state.staff[i]} />)}
      </div>
    );
  }
}

export default Cohort;
