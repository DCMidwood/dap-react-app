const FIREBASE_DOMAIN = 'https://dap-backend-default-rtdb.europe-west1.firebasedatabase.app';

export async function getTasks (){
  const response = await fetch(`${FIREBASE_DOMAIN}/tasks.json`)
  console.log(response.data)
  
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
  console.log(response.json)
  return response.json();
}

export async function addTask(taskData) {
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
    
      return null;
}
