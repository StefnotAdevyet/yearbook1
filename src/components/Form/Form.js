import React from 'react';


class Form extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: null,
      quote: null,
      superlative: null
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.state = {
      name: event.target.name.value,
      quote: event.target.quote.value,
      superlative: event.target.superlative.value
    }
    console.log('submitted : ', this.state)

  }

  handleInputChange = () => {

  }

  render() {

    return (
      <form onSubmit={this.handleSubmit} className='form'>
        <label for='name'>Name</label>
          <input type='text' name='name'/>
        <label for='quote'>Quote</label>
          <input type='text' name='quote'/>
        <label for='superlative'>Superlative</label>
          <input type='text' name='superlative'/>
        <input type='submit' value='submit'/>
      </form>
    );
  }
}

export default Form