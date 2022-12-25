import { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { projectActions } from "../../store/project-slice";
import classes from "./ProjectDropdown.module.css"


const ProjectDropdown = (props) => {
  const [projectList, setProjectList] = useState([])
  useEffect(() => {
    const fetchProjects = async ()=> {
      const response = await fetch('https://dap-backend-default-rtdb.europe-west1.firebasedatabase.app/projects.json')
      const responseData  = await response.json()

      const loadedProjects = []
      for (const key in responseData){
        loadedProjects.push(
          {
            globalid: key,
            name: responseData[key].name,
            status: responseData[key].status,
            phase: responseData[key].phase
          }
        )
      }
      setProjectList(loadedProjects)
    } 

    fetchProjects()
  }, [])

  const dispatch = useDispatch();
  const projectWorkpackId = useSelector((state) => state.globalid);

  const dropdownChangeHandler = (event) => {
    const selectedGlobalid = event.target.value;


    const selectedProject = projectList.find(obj => (
      obj.globalid === selectedGlobalid
    ))

    dispatch(projectActions.changeActiveProject({
        projectGlobalId : selectedGlobalid,
        projectName : selectedProject.name,
        projectStatus: selectedProject.status,
        projectPhase: selectedProject.phase
      })
    )
  };

  const ProjectOptions =  projectList.map((projectWorkpack) => (
    <option 
      key={projectWorkpack.globalid} 
      value={projectWorkpack.globalid}
      >
      {projectWorkpack.name}
    </option>
  ))

  return (
    <div className={classes.dropdown}>
      <div>{projectWorkpackId}</div>
      <div className={classes.dropdown__control}>
        <label>Select Project Workpack</label>
        <select
          value={props.selectedProjectWorkpack}
          onChange={dropdownChangeHandler}
        >
          {ProjectOptions}
        </select>
      </div>
    </div>
  );
};

export default ProjectDropdown;
