import React, { useState } from 'react';
import { useLocation } from 'wouter';
import GifList from '../../components/GifList';
import TrendingSearches from '../../components/TrendingSearches';
import useGifs from '../../hooks/useGifs';

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
      <GifList gifs={gifs} />
      <TrendingSearches/>
    </>
  );
};

export default Home;
