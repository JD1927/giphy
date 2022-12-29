import React, { useState } from 'react';
import { useLocation } from 'wouter';
import GifList from 'components/GifList';
import TrendingSearches from 'components/TrendingSearches';
import useGifs from 'hooks/useGifs';
import './Home.css';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [, goToRoute] = useLocation();
  const { gifs, loading } = useGifs();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Go to another route
    goToRoute(`/search/${searchValue}`);
  };
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className='Home'>
      <h1 className='Home-title'>Most popular gifs</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Let's have fun..."
          onChange={handleChange}
          type="text"
          value={searchValue}
        />
        <button type='submit'>Search</button>
      </form>
      <h3>Last search</h3>
      <GifList gifs={gifs} loading={loading} />
      <TrendingSearches/>
    </div>
  );
};

export default Home;
