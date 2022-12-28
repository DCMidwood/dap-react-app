import { RouterProvider, Navigate, createBrowserRouter, createRoutesFromElements ,Route } from 'react-router-dom';

import ErrorPage from "./pages/ErrorPage"
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import TasksPage from './pages/TasksPage';
import TaskDetailPage, {loader as taskLoader} from './pages/TaskDetailPage';
import ReportsPage, {loader as reportsLoader} from './pages/ReportsPage';
import DesignPortal from './pages/DesignPortal';
import RootLayout from './pages/RootLayout';

import CreateTaskForm, {action as newTaskAction} from './components/tasks/CreateTaskForm';
import TaskList, { loader as tasksLoader} from './components/tasks/TaskList';

const NewElement = () => {
  return (
    <p>new</p>
  )
} 


const router = createBrowserRouter( 
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={ErrorPage}>
      <Route index element={<Navigate replace to="/home" />} />
      <Route path="/home/*" element={<HomePage />} />
      <Route path="/portal" element={<DesignPortal />} />
      <Route path="/tasks" element={<TasksPage />} >
        <Route index element={<TaskList />} loader= {tasksLoader}  />
        <Route path = "new-task" element={<CreateTaskForm />} action={newTaskAction}>
          
        </Route> 

        <Route path= ":id" element={<TaskDetailPage />} loader={taskLoader} errorElement={<p style={{color: "red"}}>An error occured</p>}/>
      </Route>
      <Route path="/tasks/:taskId" element={<TasksPage />} />
      <Route path="/tasks/edit/:taskId" element={<TasksPage />} />
      <Route path="/reports/*" element={<ReportsPage />} loader = {reportsLoader}>
        <Route path="run" element={<p>Running</p>} />
      </Route>  
      {/* <Route path = "/new" element={<NewElement />} action={newTaskAction}/> */}
      <Route path="*" element={<NotFound />} />
    </Route> 
  )
)

function App() {
  return (
      <RouterProvider router={router}/>
  );
}
  
export default App;

