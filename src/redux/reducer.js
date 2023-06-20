import filterReducer from "../components/Filters/filterSlide";
import todoListReducer from "../components/TodoList/todoSlide";
import { combineReducers } from "redux";

// const rootReducer = (state= {}, action) => {
//   return {
//     filter: filterReducer(state.filter, action),
//     todoList: todoListReducer(state.todoList, action),
//   }
// };

const rootReducer = combineReducers({
  filter: filterReducer,
  todoList: todoListReducer,
})

export default rootReducer;
