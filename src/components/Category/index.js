import React from 'react';
import { Link } from 'wouter';
import './Category.css';

const Category = ({ name = '', options = [] }) => {

  return (
    <div className='Category-container'>
      <h3>{ name }</h3>
      <ul className='Category-list'>
        {options.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>{popularGif}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
