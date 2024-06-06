import React from 'react'
import Button from './Button';
import About from './About';
import Recounting from './Recounting';
import Material from './components/Material';
import TodoList from './components/Todo'
const Home = () => {
  return (
    <div>
          
    {/* <ContextHandler> */}
    hello 
    <Button>Sign up</Button>
    <Button>Submit</Button>
    {/* <Form/> */}
    <About/>
    {/* <Recounting/> */}
    <TodoList/>
    {/* <Material/> */}
    
    </div>
  )
}

export default Home
