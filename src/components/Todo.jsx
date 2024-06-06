// // TodoList.js
// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { fetchTodos } from '../actions/todoActions';

// const TodoList = ({ todos, loading, error, fetchTodos }) => {
//   useEffect(() => {
//     fetchTodos();
//   }, [fetchTodos]);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <ul>
//       {todos.map((todo) => (
//         <li key={todo.id}>{todo.title}</li>
//       ))}
//     </ul>
//   );
// };

// const mapStateToProps = (state) => ({
//   todos: state.todos,
//   loading: state.loading,
//   error: state.error,
// });

// const mapDispatchToProps = {
//   fetchTodos,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(TodoList);


// TodoList.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addtodo, removetodo } from '../actions/todoActions';

const Todolist =({todos, addtodo, removetodo})=>{
  const [input, setInput] = useState('')
const handleAddTodo = (e)=>{
  e.preventDefault()
  if(input){
    addtodo(input)
    setInput('')
  }
}

  return(
    <div>
      <input type="text" value={input} onChange={((e)=>setInput(e.target.value))} className='border border-green-500'/>
      <button onClick={handleAddTodo}>add to do</button>
      <ul>
        {todos.map((todo, index)=>(
          <li key={index}>
            <p>{todo}</p>
            <button onClick={(()=>removetodo(index))}>remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const mapState = (state)=>{
  return{
    todos: state.todos
  }
}

const mapAction = {
  addtodo,
  removetodo
}
export default connect(mapState, mapAction)(Todolist)