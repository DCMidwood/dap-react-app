import { Fragment, useRef, useState } from 'react';
import { useSelector } from 'react-redux';


import classes from "./CreateTaskForm.module.css"

const CreateTaskForm = () => {
  const [isEntering, setIsEntering] = useState(false)
  const summaryInputRef = useRef();
  const descriptionInputRef = useRef();

  const activeProjectGlobalid =  useSelector(state => state.activeProject.activeProjectGlobalid);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredSummary = summaryInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    

  }
  const onFormFocus = () => {
    setIsEntering(true)
  }

  const finishedEnteringHandler = () =>{
    setIsEntering(false)
  }

    return (
        <Fragment>
            {/* <Prompt when={isEntering} message={((location)=> "Are you sure you want to leave") }/> */}
            <form onFocus ={onFormFocus} className={classes.form} onSubmit={submitFormHandler}>

            <div className={classes.control}>
                <label htmlFor='summary'>Summary</label>
                <input type='text' id='summary' ref={summaryInputRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='text'>Text</label>
                <textarea id='text' rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button onClick = {finishedEnteringHandler} className='btn'>Add task</button>
            </div>
            </form>
        </Fragment>
    )
}

export default CreateTaskForm