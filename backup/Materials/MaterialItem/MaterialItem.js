import MaterialItemForm from "./MaterialItemForm";

import classes from "./MaterialItemForm.module.css"

const MaterialItem = (props) => {
    return (
        <li className={classes.material}>
        <div>
            <h3>{props.name}</h3>
            <div  className={classes.description}>{props.description}</div>
            <div  className={classes.code}>{props.code}</div>
        </div>
        <div>
            <MaterialItemForm />
        </div>
    </li>
    )
}

export default MaterialItem