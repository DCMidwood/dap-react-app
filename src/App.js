import React, { useEffect, useState } from "react";
import axios from "axios";
import { Fragment } from "react";

import MainHeader from './components/MainHeader/MainHeader';
import ReportsList from "./components/Reports/ReportsList";
import ProjectWorkpack from "./components/ProjectWorkpack/ProjectWorkpack";

import OutstandingTasksButton from "./components/Tasks/OutstandingTasksButton";
import Order from "./components/Order/Order"

import UserListDropdown from "./components/UserListDropdown";

import WebMap from "./components/Map/WebMap";
import Input from "./components/UI/Input";

import {getUser, fetchUsers} from './services/UsersService';

import ListReports from "./reports_list.json";
import ListProjectWorkpacks from "./projects_list.json";
import ListTurbineCoords from "./turbines_coords_list.json"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(()=>{ // runs once when app starts
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')
    localStorage.setItem('isLoggedIn', '1')
    if (storedUserLoggedInInformation === '1'){
      setIsLoggedIn(true);
    }
  }, []);


  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false);
  };
  
  const useApiRequest = url => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = () => {
        axios
          .get(url)
          .then(response => {
            setIsLoaded(true);
            setData(response.data);
          })
          .catch(error => {
            setError(error);
          });
      };
      fetchData();
    }, [url]);
  
    return { error, isLoaded, data };
  };

  const [user, setUser] = useState(null)
  const [users, setUsers] = useState([])
  const [dropdownProjectWorkpack, setDropdownProjectWorkpack] = useState(
    "Project A: WorkpackA"
  );
  const [dropdownUserSelected, setDropdownUserSelected] = useState()

  useEffect(() => {
    setUser( getUser());
    fetchUsers()
    }, []);


  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }
  
  const { data, error, isLoaded } = useApiRequest(
      "https://jsonplaceholder.typicode.com/todos"
      );

      if (error !== null) {
        return <div>Error: {error.message}</div>;
      }
      if (!isLoaded) {
        return <div>Loading...</div>;
      }

  const userDropdownChangeHandler = (selectedUser) =>{
    setDropdownUserSelected(selectedUser);
    console.log(selectedUser)
  }

  const dropdownChangeHandler = (selectedProjectWorkpack) => {
    setDropdownProjectWorkpack(selectedProjectWorkpack);
    console.log(selectedProjectWorkpack);
  };

  return (
    
    <Fragment>
      <MainHeader  listProjectWorkpacks= {ListProjectWorkpacks}
        selectedProjectWorkpack={dropdownProjectWorkpack}
        onDropdwonChange={dropdownChangeHandler}/>
      <main>
        <Order></Order>
        <ProjectWorkpack
          listProjectWorkpacks= {ListProjectWorkpacks}
          selectedProjectWorkpack={dropdownProjectWorkpack}
          onDropdwonChange={dropdownChangeHandler}
        />
        <br /><br/>
        <OutstandingTasksButton />
        <br/>
        <Input label = "Add New Task" input = {{
          id: "new task",
          type: "text",
          defaultValue: "Fix the turbibne"
        }} />
        <Input label = "Add New Quantity" input = {{
          id: "new qty",
          type: "number",
          step: "1",
          defaultValue: "1"
        }} />

        <UserListDropdown 
          listUsers={users} 
          selectedUser={dropdownUserSelected}
          onDropdwonChange={userDropdownChangeHandler}/>
        <ReportsList 
          reportsList ={ListReports} 
          />
        <br /><br/>
        <WebMap />
      </main>
      </Fragment>
  );
}

export default App;
