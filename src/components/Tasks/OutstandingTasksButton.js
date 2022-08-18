import TaskIcon from "./TaskIcon";
import classes from "./OutstandingTasksButton.module.css"

const OutstandingTasksButton = props => {

    return (
        <button className={classes.button}>
        <span className={classes.icon}>
            <TaskIcon />
        </span>
        <span >Your Tasks</span>
        <span className={classes.badge}>
            3
        </span>
    </button>
    )
}

export default OutstandingTasksButton