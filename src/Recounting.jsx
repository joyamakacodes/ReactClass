import React from 'react';
import { increment, decrement } from './store/actions';
import { connect } from 'react-redux';


const Recounting = ({count, increment, decrement}) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

    </div>
  );
}


const mapStatetoProps=(state)=>({
  
    count: state.count
  
})
const mapstoresAction= {
  increment,
  decrement
}
export default connect(mapStatetoProps, mapstoresAction)(Recounting)