import { useSelector } from "react-redux"

const ProjectDetails = () =>{
    const activeProjectGlobalid =  useSelector(state => state.activeProject.activeProjectGlobalid);
    const activeProjectName =  useSelector(state => state.activeProject.activeProjectName);

    console.log(activeProjectGlobalid)

    return (
        <div>
            <h3>Project name: {activeProjectName}</h3>
            <h4>{activeProjectGlobalid}</h4>
            <p>Project is blah blah blah </p>
        </div>
    )
}

export default ProjectDetails