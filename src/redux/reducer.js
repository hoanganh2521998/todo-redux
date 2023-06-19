const initState = {
  filter: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "coding", completed: false, priority: "Medium" },
    { id: 2, name: "combat", completed: true, priority: "Low" },
    { id: 3, name: "sleep", completed: false, priority: "High" },
  ],
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case "filter/searchFilterChange":
      return {
        ...state,
        filter: {
          ...state.filter,
          search: action.payload,
        }
      };
    default:
      return state;
  }
};

export default rootReducer;
