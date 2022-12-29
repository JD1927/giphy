import React from 'react';
import { Link } from 'wouter';
import './Gif.css';

const Gif = ({ id, title, url }) => {
  return (
    <Link to={`/gif/${id}`} className='Gif'>
      <img key={id} src={url} alt={title} />
      <small>{title}</small>
    </Link>
  );
};

export default Gif;
