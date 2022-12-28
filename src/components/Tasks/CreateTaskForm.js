import { useNavigate, useNavigation, redirect, useActionData } from 'react-router-dom';
import { Form } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { addTask } from '../../utils/api';


import classes from "./CreateTaskForm.module.css"
import { Fragment } from 'react';


const CreateTaskForm = () => {
  const data = useActionData();
  console.log(data)
  const navigate = useNavigate();
  const navigation = useNavigation()


  const activeProjectGlobalid =  useSelector(state => state.activeProject.activeProjectGlobalid);

  const onCancel = () => {
    navigate('/tasks');
  }

    return (
      <Fragment >
        <div style={{color: "red"}}>
          {data && data.status && <p>{data.message}</p>}
        </div>
        <Form className={classes.form} method="post" action="/tasks/new-task">
          <fieldset className={classes.control}>
            <label htmlFor='summary'>Summary</label>
              <input 
                type='text' 
                name="task-summary" 
                required minLength = {5} 
                id='summary' 
              />
          </fieldset>
          <fieldset className={classes.control}>
            <label htmlFor='text'>Description</label>
              <textarea 
                id='text' 
                name="task-description"
                rows='3'
                required
                minLength={10}
              />
          </fieldset>
          <input type="hidden" id="projectGlobalId" name="task-projectGlobalId" value={activeProjectGlobalid}/>
          <input type="hidden" id="userId" name="task-userId" value="111" />
          <input type="hidden" id="statusId" name="task-statusId" value="23"/>

          <button onClick = {onCancel} className='btn'>
            Cancel 
          </button>
      <button disabled={navigation.state === 'submitting'}>
        {navigation.state === 'submitting' ? 'Submitting...' : 'Add task'}
      </button>
        </Form>
      </Fragment>
    )
}

export default CreateTaskForm

export async function action({ request }){

  const formData = await request.formData()
  console.log(formData)

  const task = {
      description: formData.get('task-description'),
      summary: formData.get('task-summary'),
      statusId: formData.get('task-statusId'),
      projectGlobalid: formData.get('task-projectGlobalId'),
      userId: formData.get('task-userId')
  }
  console.log(task)
  try {
    await addTask(task)
  } catch (err) {
    return err;
  }

  return redirect('/tasks')
}