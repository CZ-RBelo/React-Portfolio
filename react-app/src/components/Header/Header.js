import React, { Component } from "react";

import NavBar from "../NavBar/NavBar";

import Home from "../Home/Home";
import About from "../About/About";
import KeySkills from "../KeySkills/KeySkills";
import ProjectGallery from "../ProjectGallery/ProjectGallery";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

import "../Header/Header.css";

class Header extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    let Page = "";
    // eslint-disable-next-line
    switch (this.state.currentPage) {
      case "Home": Page = <div className="container-fluid" id="home"><Home /></div>; break;
      case "About": Page = <div className="container-fluid" id='header'><About /></div>; break;
      case "Skills": Page = <div className="container-fluid"  id='header'><KeySkills /></div>; break;
      case "Projects": Page = <div className="container-fluid"  id='header' style={{ paddingBottom: '250px'}}><ProjectGallery /></div>; break;
      case "Contact": Page = <div className="container-fluid"  id='header'><Contact /></div>; break;
    }
    return (
      <div>
        <NavBar
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {Page}
        <Footer />
      </div>
    );
  }
}

export default Header;