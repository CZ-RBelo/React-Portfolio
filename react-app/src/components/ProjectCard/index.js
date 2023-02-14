import React from "react";

function ProjectCard(props) {
    return (
        <div className="container-fluid">
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.image} className="card-img-top" alt={props.name + "Project Image"} />
                <div className="card-body">
                    <h5 className="card-title"> {props.name} </h5>
                    <p className="card-text"> {props.details} </p>
                    <a href={props.deployed} target="_blank" rel="noreferrer" className="btn btn-primary">Link</a>
                    <a href={props.github} target="_blank" rel="noreferrer" className="btn btn-primary">Github</a>
                </div>
            </div>
        </div>
    )
}
export default ProjectCard;