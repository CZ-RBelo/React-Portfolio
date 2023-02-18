import React, { Component } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectWrapper from "../ProjectWrapper/ProjectWrapper";
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
                            video={project.video}
                            image={project.image}
                            deployed={project.deployed}
                            github={project.github}
                            details={project.details}
                        />
                    ))
                }
            </ProjectWrapper>

        );
    }

}

export default ProjectGallery;