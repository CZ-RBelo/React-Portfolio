import React from "react";


import "../ProjectWrapper/ProjectWrapper.css";

function ProjectWrapper(props) {
  return (
    <div className="container" id="projectWrapper">
      <h2 className="text-center">Latest Projects</h2>
      <hr className="hr mb-5" />
      <div>{props.children}</div>
    </div>
  );
}
export default ProjectWrapper;