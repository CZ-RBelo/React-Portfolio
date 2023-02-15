import React from "react";

function NavTabs(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Rui Belo</span >
        <ul className="navbar-nav d-flex">
          <li className="nav-item">
            <a href="#home" onClick={() => props.handlePageChange("Home")} className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" onClick={() => props.handlePageChange("About")} className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#projectgallery" onClick={() => props.handlePageChange("ProjectGallery")} className="nav-link">
              Project Gallery
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={() => props.handlePageChange("Contact")} className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;