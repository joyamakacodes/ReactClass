import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import BlogData from './BlogData';

const BlogDetails = () => {
  const {id}= useParams()
  const [blogs, setBlogs] = useState({});

  
  
  useEffect(()=>{
    const render = BlogData.find((data)=>data.id === parseInt(id))
    if(render){
      setBlogs(render)
    }
  },[id])
  return (
    <div>
      <img src={blogs.Image} alt={blogs.Title} />
      <h1>{blogs.Title}</h1>
      <p>{blogs.Contents}</p>
      <p>{blogs.Read}</p>
      <p>{blogs.Type}</p>
      <a href={blogs.link} target="_blank" rel="noopener noreferrer">{blogs.link}</a>

    </div>
  );
}

export default BlogDetails;
