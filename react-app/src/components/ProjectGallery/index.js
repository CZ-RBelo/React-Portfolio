import React, { Component } from "react";
import ProjectCard from "../ProjectCard";
import ProjectWrapper from "../ProjectWrapper";
import projects from "../projects.json";

class ProjectGallery extends Component {
    // Setting this.state.projects to the projects json array
    state = {
        projects
    };

    // Map over this.state.projects and render a Project Card component for each project object
    render() {

        return (
            <ProjectWrapper>
            {
                this.state.projects.map(project => (
                    <ProjectCard
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        image={project.image}
                        occupation={project.github}
                        location={project.deployed}
                    />
                ))
            }
            </ProjectWrapper>
        );
    }

}

export default ProjectGallery;