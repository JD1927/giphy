import React from 'react';
import { Link } from 'wouter';

const POPULAR_GIFS = [
  'Shingeki No Kiojin Gifs',
  'The Blacklist Gifs',
  'Suits Gifs',
  'Rick and Morty',
];

const Home = () => {
  return (
    <>
      <h1>My most popular gifs</h1>
      <ul>
        {
          POPULAR_GIFS.map(popularGif => (
            <li key={popularGif}>
              <Link to={`/search/${popularGif}`}>{popularGif}</Link>
            </li>
          ))
        }
      </ul>
    </>
  );
};

export default Home;
