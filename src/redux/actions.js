// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: { id: 4, name: "learn dive", completed: false, priority: "High" },
// }

export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: "filter/searchFilterChange",
    payload: text,
  };
};
