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
      <div className="Home-container">
        <div className='Home-GifList'>
          <h3 className='Home-title'>Last search</h3>
          <GifList gifs={gifs} loading={loading} />
        </div>
        <div className='Home-TrendingSearches'>
          <TrendingSearches />
        </div>
      </div>
    </div>
  );
};

export default Home;
