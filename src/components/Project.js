import React from "react";

function Project(props) {
  return (
    <>
        <section class="project">
          <img src={props.project.image} alt={"Screenshot of " + props.project.title}/>
          <div>
            <h2>{props.project.title}</h2>
            <p>{props.project.description}</p>
            <div className="projectLinks">
              <a href={props.project.deployed} target="_blank" rel="noreferrer">See it live</a>
              <a href={props.project.repo} target="_blank" rel="noreferrer">Repository</a>
            </div>
          </div>
        </section>
    </>
  );
}

export default Project;
