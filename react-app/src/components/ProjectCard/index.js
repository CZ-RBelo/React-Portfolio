import React from "react";

function ProjectCard(props) {
    return (
        <div class="container-fluid">
            <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                    <h5 class="card-title"> {props.name} </h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href={props.deployed} class="btn btn-primary">Find out more</a>
                </div>
            </div>            
        </div>
    )
}
export default ProjectCard;