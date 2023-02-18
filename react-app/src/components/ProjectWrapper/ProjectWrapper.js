import React from "react";

function ProjectWrapper(props) {
  return (
  <div className="container">
  <h2 className="text-center">Latest Projects</h2>
  <hr className="hr mb-5" />
  <div className="p-3">{props.children}</div>
  </div>
  );
}

export default ProjectWrapper;