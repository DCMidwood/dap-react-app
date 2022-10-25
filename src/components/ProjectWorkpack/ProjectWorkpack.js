import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./ProjectWorkpack.css";

const ProjectWorkpack = (props) => {
  const dispatch = useDispatch();
  const projectWorkpackId = useSelector((state) => state.id);

  const dropdownChangeHandler = (event) => {
    props.onDropdwonChange(event.target.value);
    dispatch({ type: "change", id: event.target.value });
  };

  return (
    <div className="project-workpack-dropdown">
      <div>{projectWorkpackId}</div>
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
