import React, { Component } from "react";

//import backgroundImage from "../../assets/image/pexels-lisa-fotios-1545510.jpg";

import "../Contact/Contact.css";

import{ motion} from 'framer-motion';

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
      <motion.div class="container" id="contact"
      
      transition={{
        delay: 0.5,
        x: { duration: 1 },
        default: { ease: "linear" }
      }}
      
      >
        <div className="container">
          <h2 className="text-center">Contact</h2>
          <hr className="hr mb-5" />
        </div>
        <div className="card border-0 p-3 mb-5 rounded-0" id="contact">
          <h5 className="card-title">Hello! How can I help you?</h5>
          <p className="card-text">I am always open for a chat.</p>
          <form onSubmit={this.handleSubmit}>

            <input name="name" type="text" className="form-control form-control-sm mb-1" id="exampleFormControlInput1" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
            <input name="email" type="email" className="form-control form-control-sm mb-1" id="exampleFormControlInput2" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
            <input name="location" type="text" className="form-control form-control-sm mb-1" id="exampleFormControlInput3" placeholder="Location" value={this.state.location} onChange={this.handleChange} />
            <textarea name="message" className="form-control form-control-sm mb-2" id="exampleFormControlInput4" placeholder="Message" rows="3" value={this.state.message} onChange={this.handleChange} />

            <input type="submit" className="btn btn-secondary btn-sm ms-1" value="Submit" />

          </form>
        </div>
      </motion.div>
    )
  }
}

export default Contact;