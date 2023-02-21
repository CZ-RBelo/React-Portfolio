import React from "react";

import "../ProjectWrapper/ProjectWrapper.css";

import{ motion} from 'framer-motion';

function ProjectWrapper(props) {
  return (
    <motion.div className="container" id="projectWrapper"

    transition={{
      delay: 0.5,
      x: { duration: 1 },
      default: { ease: "linear" }
    }}
    >
      <h2 className="text-center">Latest Projects</h2>
      <hr className="hr mb-5" />
      <div>{props.children}</div>
    </motion.div>
  );
}
export default ProjectWrapper;