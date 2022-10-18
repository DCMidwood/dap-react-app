import React from "react";

import "./ProjectWorkpack.css";

const ProjectWorkpack = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onDropdwonChange(event.target.value);
  };

  return (
    <div className="project-workpack-dropdown">
      <div className="project-workpack-dropdown__control">
        <label>Select Project Workpack</label>
        <select
          value={props.selectedProjectWorkpack}
          onChange={dropdownChangeHandler}
        >
          {props.listProjectWorkpacks.map((projectWorkpack) => (
            <option key={projectWorkpack.id} value={projectWorkpack.id}>
              {projectWorkpack.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ProjectWorkpack;
