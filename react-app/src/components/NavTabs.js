import React from "react";

function NavTabs(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <a className="navbar-brand" href="#home" onClick={() => props.handlePageChange("Home")}>Rui Belo</a>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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