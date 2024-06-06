import logo from './logo.svg';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Practice from './Practice';
import AllBlogs from './components/AllBlogs';
import BlogDetails from './components/BlogDetails';
import ShowExample from './showExample';
import Example from './Example';
// ?import { ContextHandler } from './Context';
// import Form from './Form';
import Recounting from './Recounting';
import { StateManager } from './Context';
function App() {
  return (
    <>
    <StateManager>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Example/>}/> */}
          <Route path='/show/:id' element={<ShowExample/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/practice' element={<Practice/>}/>
          {/* 
          /<Route path='/practice' element={<Practice/>}/>
          <Route path='/blogs' element={<AllBlogs/>}/>
          <Route path='/blog/:id' element={<BlogDetails/>}/> */}




        </Routes>
      </Router>
    </StateManager>
    </>
    
  );
}

export default App;
