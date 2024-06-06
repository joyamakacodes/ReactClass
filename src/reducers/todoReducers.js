// // const initialTodoState = {
// //   todos: [],
// //   loading: false,
// //   error: null,
// // };

// // // Reducer
// // export const TodosReducer = (state = initialTodoState, action) => {
// //   switch (action.type) {
// //     case 'FETCH_TODOS_REQUEST':
// //       return {
// //         ...state,
// //         loading: true,
// //         error: null,
// //       };
// //     case 'FETCH_TODOS_SUCCESS':
// //       return {
// //         ...state,
// //         loading: false,
// //         todos: action.payload,
// //       };
// //     case 'FETCH_TODOS_FAILURE':
// //       return {
// //         ...state,
// //         loading: false,
// //         error: action.error,
// //       };
// //     default:
// //       return state;
// //   }
// // };


// // store.js
import { createStore } from 'redux';

// Initial state
const initialState = {
  todos: [],
};

// Reducer
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload),
      };
    default:
      return state;
  }
};

const store = createStore(todosReducer);

export default store;
