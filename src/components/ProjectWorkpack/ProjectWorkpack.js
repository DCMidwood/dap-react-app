import React from "react";

import "./ProjectWorkpack.css";

const ProjectWorkpack = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onDropdwonChange(event.target.value);
  };

  return (
    <div className="project-workpack-dropdown">
      <div className="project-workpack-dropdown__control">
        <label>Select Project : Workpack</label>
        <select
          value={props.selectedProjectWorkpack}
          onChange={dropdownChangeHandler}
        >
          <option value={"Project A: WorkpackA"}>Project A: WorkpackA</option>
          <option value={"Project A: WorkpackB"}>Project A: WorkpackB</option>
          <option value={"Project B: WorkpackA"}>Project B: WorkpackA</option>
          <option value={"Project C: WorkpackD"}>Project C: WorkpackD</option>
        </select>
      </div>
    </div>
  );
};

export default ProjectWorkpack;
