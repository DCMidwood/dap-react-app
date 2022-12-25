import { Link, Outlet } from "react-router-dom";

const TasksPage = () => {
    return (
        <div>
            <Link to="new-task">Create new task </Link>
            <h1>Tasks</h1>
            <Outlet />

        </div>
    )
}

export default TasksPage;

