import React from "react";
import Input from "../UI/Input";
import { Fragment } from "react"
import OutstandingTasksButton from "./OutstandingTasksButton";

const Tasks = (props) => {
    return <Fragment > 
        <OutstandingTasksButton />
        <br/>
        <Input label = "Add New Task" input = {{
            id: "new task",
            type: "text",
            defaultValue: "Fix the turbibne"
        }} />
    </Fragment>
}

export default Tasks