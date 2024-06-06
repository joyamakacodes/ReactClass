import React from 'react';
import BlogData from './components/BlogData';
import { Link } from 'react-router-dom';

const Example = () => {
  return (
    <div>
      {BlogData.map(({id, Title, Type, Read, link, Image, Contents})=>(
        <div key={id}>
          <img src={Image} alt="blogs" />
          <h1>{Title}</h1>
          <p>{Contents.substring(0, 50)}...</p>
          <a href={link} target="_blank" rel="noopener noreferrer"> to read more, go to this link{link}</a>
          <p>{Type}</p>
          
          <Link to={`/show/${id}`}>
          <p>{Read}</p>
          </Link>
        </div>
      )) }
    </div>
  )
}

export default Example