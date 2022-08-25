import React from "react";

function ProjectList(props) {
  return (
    <ul className="list-group">
      {props.projects.map(item => (
        <li className="list-group-item" key={item.id}>
          {item.title}
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
