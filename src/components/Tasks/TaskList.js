import { useState, useEffect } from "react"
import Card from '../UI/Card'
import { useSelector } from "react-redux"
import { useLoaderData } from "react-router-dom"
import { getTasks } from "../../utils/api"

const TaskList = (props) => {
    const [taskList, setTaskList] = useState([])
    const activeProjectGlobalid =  useSelector(state => state.activeProject.activeProjectGlobalid);

    const loaderData = useLoaderData()

    useEffect(() => {

        const fecthTasks = async ()=> {
            const loadedTasks = []
            for (const key in loaderData){
                loadedTasks.push(
                    {
                        uid: key,
                        projectGlobalid: loaderData[key].projectGlobalid,
                        userId: loaderData[key].userId,
                        statusId : loaderData[key].statusId,
                        summary: loaderData[key].summary,
                        description: loaderData[key].description
                    }
                )
            }
            setTaskList(loadedTasks)
        } 
        fecthTasks()
      }, [loaderData])
      
    console.log(activeProjectGlobalid)
    
    let tasksListed
    if (activeProjectGlobalid !== ""){
        const projectTaskList = (
        taskList.filter(obj => (
            obj.projectGlobalid === activeProjectGlobalid
          )))

        if (projectTaskList.length === 0 ){
            tasksListed = (
                <p style={{color: "red"}}> No tasks for this project </p>) 
            }

        else {
            tasksListed = projectTaskList.map((task) => (
            <ul > 
                <Card key={task.id} >
                    <header>{task.summary}</header>
                    <p>{task.description}  -  Status {task.status}  - User {task.user}</p>
                </Card>
            </ul>
        ))
        }
    }
    
    else {
        tasksListed = "Select a project"
    }


    return (
        <div>
            {tasksListed}
        </div>
    )
}

export default TaskList


export function loader(){
    return getTasks()
}