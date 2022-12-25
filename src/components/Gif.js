import React from 'react';
import { Link } from 'wouter';
import './Gif.css';

const Gif = ({ id, title, url }) => {
  return (
    <Link to={`/gif/${id}`} className='Gif'>
      <h4>{title}</h4>
      <img key={id} src={url} alt={title} />
    </Link>
  );
};

export default Gif;
