// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filterSlide from "../components/Filters/filterSlide";
import todoListSlide from "../components/TodoList/todoSlide";

const store = configureStore({
  reducer: {
    filter: filterSlide.reducer,
    todoList: todoListSlide.reducer,
  },
});

export default store;
