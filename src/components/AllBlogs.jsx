import React from 'react';
import BlogData from './BlogData';
import { Link } from 'react-router-dom';

const AllBlogs = () => {

  return (
    <div style={{display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', /* Creates three equal columns */
    gap: '16px', /* Space between grid items */
    padding: '16px'}}>
      {BlogData.map(({id, Image, Title, Read, Type, link})=>(
        <div key={id} style={{border: '1px solid blue'}}>
          <Link to={`/blog/${id}`}>
          <img src={Image} alt={Title} />
          <p>{Title}</p>
          <p>{Type}</p>
          <p>{Read}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AllBlogs;
