import { sleep } from "./sleep";
const FIREBASE_DOMAIN = 'https://dap-backend-default-rtdb.europe-west1.firebasedatabase.app';

export async function getTasks (){
  const response = await fetch(`${FIREBASE_DOMAIN}/tasks.json`)
  if (!response.ok){
    throw {message: "failed to fetch tasks", status: 500}
  }
  return response.json();
}


export async function getTask(id){
  const response = await fetch(`${FIREBASE_DOMAIN}/tasks/${id}.json` )

  if (!response.ok){
    throw {message: "failed to fetch tasks", status: 500}
  }
  return response.json();
}

export async function addTask(taskData) {
  if (taskData.summary.trim().length < 10 ){
    throw {message : "Invalid input data", status: 422}
  }
  const response = await fetch(`${FIREBASE_DOMAIN}/tasks.json`, {
    method: 'POST',
    body: JSON.stringify(taskData),
    headers: {
      'Content-Type': 'application/json',
      },
  });
   
  const data = await response.json();
    
  if (!response.ok) {
    throw new Error(data.message || 'Could not create task.');
  }
}


export async function getReports(){
  await sleep(2000);

  const response = await fetch(`${FIREBASE_DOMAIN}/reports.json`)
  
  if (!response.ok){
    throw {message: "failed to fetch tasks", status: 500}
  }
  return response.json();
}