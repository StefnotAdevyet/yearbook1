import React from 'react';
import './Person.css';


class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = props
  }

  render() {
    console.log('props from person ', this.state.teacher)
    return (
      <div className="person">
        <img src={this.state.teacher.photo} />
        <br />
        <span>{this.state.teacher.name}</span>
        <span>{this.state.teacher.quote}</span>
        <span>{this.state.teacher.superlative}</span>
      </div>
    );
  }
}

export default Person;
