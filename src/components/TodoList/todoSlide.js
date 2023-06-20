const initState = [
  { id: 1, name: "coding", completed: false, priority: "Medium" },
  { id: 2, name: "combat", completed: true, priority: "Low" },
  { id: 3, name: "sleep", completed: false, priority: "High" },
];

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    case "todoList/toggleTodoStatus":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};

export default todoListReducer;
