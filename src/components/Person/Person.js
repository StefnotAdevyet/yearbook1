import React from 'react';
import './Person.css';


class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = props
  }

  render() {
    console.log('props from person ', this.state.person)
    return (
      <div className="person">
        <img src={this.state.person.photo} />
        <span className="name">{this.state.person.name}</span>
        <span className="quote">'{this.state.person.quote}'</span>
        <span className="superlative">{this.state.person.superlative}</span>
      </div>
    );
  }
}

export default Person;
