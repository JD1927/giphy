import React from 'react';
import { Link } from 'wouter';
import './Category.css';

const Category = ({ name = '', options = [] }) => {

  return (
    <div>
      <h3 className='Category-name'>{ name }</h3>
      <ul className='Category-list'>
        {options.map((popularGif) => (
          <li className='Category-item' key={popularGif}>
            <Link to={`/search/${popularGif}`}>{popularGif}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
