import React from "react";

function ProjectCard(props) {
    return (
        <div class="row">
            <div className="card border-0 shadow-sm rounded-0 mb-3">
                <h5 className="card-title bg-light">{props.name}</h5>
                <hr className="hr" />

                {props.video.length > 0 && <video controls ><source src={props.video} type="video/mp4" /></video>}
                {props.image.length > 0 && <img src={props.image} className="card-img-top" alt={props.name + "Project Image"} />}

                <div className="card-body">
                    <h5 className="card-title small"> Description </h5>
                    <p className="card-text small"> {props.details} </p>
                    <button href={props.deployed} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm  ms-3">Web page link</button >
                    <button href={props.github} target="_blank" rel="noreferrer" className="btn btn-secondary btn-sm ms-1">Github link</button >
                </div>
            </div>
        </div>
    )
}
export default ProjectCard;