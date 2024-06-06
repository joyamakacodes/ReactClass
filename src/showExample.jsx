import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import BlogData from './components/BlogData';

const ShowExample = () => {
  const {id}= useParams();
  const [blogs, setblogs]= useState({})
  
  useEffect(()=>{
    const show = BlogData.find((data) => data.id === parseInt(id))

    setblogs(show)
  },[id])
  return (
    <div className='mx-auto'>
      <img src={blogs.Image} alt="blog" className=''/>
      <h1 className='text-3xl font-bold text-blue-500'>{blogs.Title}</h1>
      <p>{blogs.Contents}</p>
      
    </div>
  )
}

export default ShowExample;