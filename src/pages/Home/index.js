import React, { useCallback } from 'react';
import { useLocation } from 'wouter';
import GifList from 'components/GifList';
import TrendingSearches from 'components/TrendingSearches';
import useGifs from 'hooks/useGifs';
import './Home.css';
import SearchForm from 'components/SearchForm';

const Home = () => {
  const [, goToRoute] = useLocation();
  const { gifs, loading } = useGifs();

  const handleSubmit = useCallback(({ searchValue }) => {
    // Go to another route
    goToRoute(`/search/${searchValue}`);
  }, [goToRoute]);
  return (
    <div className='Home'>
      <SearchForm onSubmit={handleSubmit}/>
      <h3>Last search</h3>
      <GifList gifs={gifs} loading={loading} />
      <TrendingSearches/>
    </div>
  );
};

export default Home;
