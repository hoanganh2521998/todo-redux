// const initState = [
//   { id: 1, name: "coding", completed: false, priority: "Medium" },
//   { id: 2, name: "combat", completed: true, priority: "Low" },
//   { id: 3, name: "sleep", completed: false, priority: "High" },
// ];

// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todoListReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice ({
  name: "todoList",
  initialState: [
    { id: 1, name: "coding", completed: false, priority: "Medium" },
    { id: 2, name: "combat", completed: true, priority: "Low" },
    { id: 3, name: "sleep", completed: false, priority: "High" }
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const curTodo = state.find(todo => todo.id === action.payload);
      if(curTodo) {
      curTodo.completed = !state.completed;
      }
    }
  }
})