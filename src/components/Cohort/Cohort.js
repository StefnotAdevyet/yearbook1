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
    console.log('state from cohort: ', Object.values(this.state)[0])
    return (
//iterates over array of people and renders a person component based on the information
      <div>
        {Object.values(this.state)[0].map((person, i) =>
        <Person className="idCard" person={Object.values(this.state)[0][i]} />)}
        <br />
      </div>
    );
  }
}

export default Cohort;
