import React from 'react';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <form className='form'>
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