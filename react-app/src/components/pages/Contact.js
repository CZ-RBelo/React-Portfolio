import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      location: '',
      message: '',
      about: '',
      subscribe: ''

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //this.setState({ value: event.target.value });

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });


  }

  handleSubmit(event) {
    alert('Thank you!');
    event.preventDefault();
  }

  render() {
    return (
      <div class="mb-3">
      <form onSubmit={this.handleSubmit}>

        
          <input name="name" type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
          <input name="email" type="email" class="form-control" id="exampleFormControlInput2" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
          <input name="location" type="text" class="form-control" id="exampleFormControlInput3" placeholder="Location" value={this.state.location} onChange={this.handleChange} />
          <textarea name="message" class="form-control" id="exampleFormControlInput4" placeholder="Message" rows="3" value={this.state.message} onChange={this.handleChange} />
       
        <input type="submit" value="Submit" />

      </form>
      </div>
    )
  }
}

export default Contact;