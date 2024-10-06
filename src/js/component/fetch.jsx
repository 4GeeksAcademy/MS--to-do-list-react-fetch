async function getAllTodos() {
  try{
    const response = await fetch('https://playground.4geeks.com/todo/users/MS',{
       method: 'GET',
       headers: {
        'Content-Type': 'application/json'
       }
    });
    if (!response.ok) {
        throw new Error(`Error fetching todos: ${response.statusText}`) 
    }
    const data= await response.json();
    return data;
  } 
  catch (error){ 
    console.error('error in get all todos:', error);
    return null;
  }
}

async function createTodo(todo) {
  try{
    const response = await fetch('https://playground.4geeks.com/todo/todos/MS',{
       method: 'POST',
       headers: {
        'Content-Type': 'application/json'
       },
       body: JSON.stringify({
        label: todo.label,
        is_done: todo.done
       })
    });
    if (!response.ok) {
        throw new Error(`Error creating todos: ${response.statusText}`) 
    }
    const data= await response.json();
    return data;
  } 
  catch (error){ 
    console.error('error in createTodo:', error);
    return null;
  }
}

async function updateTodo(todo, todoId) {
  try{
    const response = await fetch(`https://playground.4geeks.com/todo/todos/${todoId}`,{
       method: 'PUT',
       headers: {
        'Content-Type': 'application/json'
       },
       body: JSON.stringify({
        label: todo.label,
        is_done: todo.done
       })
    });
    if (!response.ok) {
        throw new Error(`Error updating todos: ${response.statusText}`) 
    }
    const data= await response.json();
    return data;
  } 
  catch (error){ 
    console.error('error in updateTodo:', error);
    return null;
  }
}

async function deleteTodo(todoId) {
  try{
    const response = await fetch(`https://playground.4geeks.com/todo/users/${todoId}`,{
       method: 'DELETE',
       headers: {
        'Content-Type': 'application/json'
       }
    });
    if (!response.ok) {
        throw new Error(`Error deleting todos: ${response.statusText}`) 
    }
    const data= await response.json();
    return data;
  } 
  catch (error){ 
    console.error('error in deleteTodo:', error);
    return null;
  }
}

export {getAllTodos, createTodo, updateTodo, deleteTodo}