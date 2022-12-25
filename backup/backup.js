import React, { useEffect, useState } from "react";
import {Redirect, Route, Switch} from 'react-router-dom'

import axios from "axios";
import { Fragment } from "react";

import MainHeader from "./components/MainHeader/MainHeader";
import ReportsList from "../src/components/Reports/ReportsList";
import ProjectWorkpack from "../src/components/ProjectWorkpack/ProjectWorkpack";

import OutstandingTasksButton from "../src/components/Tasks/OutstandingTasksButton";
import Order from "./components/Order/Order";

import Materials from "./components/Materials/Materials";
import Tasks from "../src/components/Tasks/Tasks";
import UserListDropdown from "../src/components/UserListDropdown";

import WebMap from "./components/Map/WebMap";
import Input from "../src/components/UI/Input";

import { getUser, fetchUsers } from "../src/services/UsersService";

import ListReports from "../src/reports_list.json";
import ListProjectWorkpacks from "../src/projects_list.json";
import ListTurbineCoords from "../src/turbines_coords_list.json";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    // runs once when app starts
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    localStorage.setItem("isLoggedIn", "1");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const useApiRequest = (url) => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = () => {
        axios
          .get(url)
          .then((response) => {
            setIsLoaded(true);
            setData(response.data);
          })
          .catch((error) => {
            setError(error);
          });
      };
      fetchData();
    }, [url]);

    return { error, isLoaded, data };
  };

  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [dropdownProjectWorkpack, setDropdownProjectWorkpack] = useState(
    "Project A: WorkpackA"
  );
  const [dropdownUserSelected, setDropdownUserSelected] = useState();

  useEffect(() => {
    setUser(getUser());
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  const { data, error, isLoaded } = useApiRequest(
    "https://jsonplaceholder.typicode.com/todos"
  );

  if (error !== null) {
    return <div>Error: {error.message}</div>;
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const userDropdownChangeHandler = (selectedUser) => {
    setDropdownUserSelected(selectedUser);
    console.log(selectedUser);
  };

  const dropdownChangeHandler = (selectedProjectWorkpack) => {
    setDropdownProjectWorkpack(selectedProjectWorkpack);
    console.log(selectedProjectWorkpack);
  };

  let latitude = 54.19;
  let longitude = -2.67;

  return (
    <Fragment>
      <MainHeader
        listProjectWorkpacks={ListProjectWorkpacks}
        selectedProjectWorkpack={dropdownProjectWorkpack}
        onDropdwonChange={dropdownChangeHandler}
      />
      <main>
        {/* <Order></Order> */}
        <ProjectWorkpack
          listProjectWorkpacks={ListProjectWorkpacks}
          selectedProjectWorkpack={dropdownProjectWorkpack}
          onDropdwonChange={dropdownChangeHandler}
        />
        <br />
        <br />
        <Tasks />

        <UserListDropdown
          listUsers={users}
          selectedUser={dropdownUserSelected}
          onDropdwonChange={userDropdownChangeHandler}
        />
        <ReportsList reportsList={ListReports} />
        <br />
        <br />
        <WebMap latitude={latitude} longitude={longitude} />
        <Materials />
      </main>
    </Fragment>
  );
}

export default App;
