// // actions.js
// export const fetchTodosRequest = () => ({
//   type: 'FETCH_TODOS_REQUEST',
// });

// export const fetchTodosSuccess = (todos) => ({
//   type: 'FETCH_TODOS_SUCCESS',
//   payload: todos,
// });

// export const fetchTodosFailure = (error) => ({
//   type: 'FETCH_TODOS_FAILURE',
//   error,
// });

// export const fetchTodos = () => {
//   return (dispatch) => {
//     dispatch(fetchTodosRequest());
//     fetch('https://jsonplaceholder.typicode.com/todos')
//       .then((response) => response.json())
//       .then((data) => dispatch(fetchTodosSuccess(data)))
//       .catch((error) => dispatch(fetchTodosFailure(error)));
//   };
// };
// actions.js
export const addtodo = (todo)=>(
  {
    type: 'ADD_TODO',
    payload: todo,
  }
)

export const removetodo = (index)=>(
  {
    type: 'REMOVE_TODO',
    payload: index
  }
)

