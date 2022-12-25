import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './ProjectDetailButton.module.css';

const ProjectDetailButton = ()=> {
    const dispatch  = useDispatch()

    const toggleProjectDetail = ()=> {
        dispatch(uiActions.toggleProjectDetails())
    }

    return (
        <button className={classes.button} onClick={toggleProjectDetail}>

        <span className={classes.badge}>Project Details</span>
      </button>
    )
}

export default ProjectDetailButton