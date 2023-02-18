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

      <div className="card border-0 shadow-sm p-3 mb-5 rounded-0" id="contact">
        <h5 className="card-title bg-light">Contact me</h5>
        <hr className="hr weather-hr" />
        <form onSubmit={this.handleSubmit}>

          <input name="name" type="text" className="form-control form-control-sm mb-1" id="exampleFormControlInput1" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
          <input name="email" type="email" className="form-control form-control-sm mb-1" id="exampleFormControlInput2" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
          <input name="location" type="text" className="form-control form-control-sm mb-1" id="exampleFormControlInput3" placeholder="Location" value={this.state.location} onChange={this.handleChange} />
          <textarea name="message" className="form-control form-control-sm mb-2" id="exampleFormControlInput4" placeholder="Message" rows="3" value={this.state.message} onChange={this.handleChange} />

          <input type="submit" className="btn btn-secondary btn-sm ms-1" value="Submit" />

        </form>
      </div>

    )
  }
}

export default Contact;