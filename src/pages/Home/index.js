import React, { useState } from 'react';
import { Link, useLocation } from 'wouter';
import GifList from '../../components/GifList';
import useGifs from '../../hooks/useGifs';

const POPULAR_GIFS = [
  'Shingeki No Kiojin Gifs',
  'The Blacklist Gifs',
  'Suits Gifs',
  'Rick and Morty',
];

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [, goToRoute] = useLocation();
  const { gifs } = useGifs();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Go to another route
    goToRoute(`/search/${searchValue}`);
  };
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <>
      <h1>Most popular gifs</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Let's have fun..."
          onChange={handleChange}
          type="text"
          value={searchValue}
        />
      </form>
      <h3>Last search</h3>
      <GifList gifs={gifs}/>
      <h3>My favorites</h3>
      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>{popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
