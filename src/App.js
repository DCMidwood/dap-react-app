import React, { useEffect, useState } from "react";
import axios from "axios";

import MainHeader from './components/MainHeader/MainHeader';
import ReportsList from "./components/Reports/ReportsList";
import ProjectWorkpack from "./components/ProjectWorkpack/ProjectWorkpack";

import UserListDropdown from "./components/UserListDropdown";

import WebMap from "./components/Map/WebMap";
import {getUser, fetchUsers} from './services/UsersService';

import ListReports from "./reports_list.json";
import ListProjectWorkpacks from "./projects_list.json";
import ListTurbineCoords from "./turbines_coords_list.json"

function App() {

  
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
    
    <React.Fragment>
      <MainHeader  listProjectWorkpacks= {ListProjectWorkpacks}
        selectedProjectWorkpack={dropdownProjectWorkpack}
        onDropdwonChange={dropdownChangeHandler}/>
      <main>
      <ProjectWorkpack
        listProjectWorkpacks= {ListProjectWorkpacks}
        selectedProjectWorkpack={dropdownProjectWorkpack}
        onDropdwonChange={dropdownChangeHandler}
      />
      <br /><br/>
      {/* <h3>To do 
        {data.map(item => (
          <div>{item.id}</div>
        ))}
      </h3> */}

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
      </React.Fragment>
  );
}

export default App;
