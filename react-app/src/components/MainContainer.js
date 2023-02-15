import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./Home/Index";
import About from "./About";
import ProjectGallery from "./ProjectGallery";
import Contact from "./Contact";

class MainContainer extends Component {
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
      case "Home": Page = <Home />; break;
      case "About": Page = <About />; break;
      case "ProjectGallery": Page = <ProjectGallery />; break;
      case "Contact": Page = <Contact />; break;      
    }
    return (
      <div className="container-fluid">
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {Page}
      </div>
    );
  }
}

export default MainContainer;