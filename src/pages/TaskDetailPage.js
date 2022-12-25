import { getTask } from "../utils/api";
import { useLoaderData } from "react-router-dom";

const TaskDetailPage = () => {
    const loaderData = useLoaderData()
    console.log(loaderData)

    return (
        <div>
            <h3>Task detail</h3>
            <h4>{loaderData.summary}</h4>
            <p>{loaderData.description}</p>
        </div>
    )
}

export default TaskDetailPage;

export function loader({params}){
    const taskId = params.id
    return getTask(taskId)
}