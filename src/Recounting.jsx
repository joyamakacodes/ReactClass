import React from 'react';
import { increment, decrement, reset } from './actions/countActions';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Recounting = ({count, increment, decrement, reset}) => {
  const navigate = useNavigate();
  
  const handleSubmit= (e)=>{
    e.preventDefault()
    navigate('/practice')
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>click me</button>
      <br />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}


const mapStatetoProps=(state)=>({
  
    count: state.count
  
})
const mapstoresAction= {
  increment,
  decrement,
   reset
}
export default connect(mapStatetoProps, mapstoresAction)(Recounting)