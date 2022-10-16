const axios = require("axios");

export async function getUser() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users/1"
    );

    return response;
  } catch (error) {
    return [];
  }
}

export async function fetchAllUsers() {
  fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Sorry something went wrong");
    }
  });
}

export async function getAllUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log("response  ", response);
    return response.data;
  } catch (error) {
    return [];
  }
}
