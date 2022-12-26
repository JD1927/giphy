import React from 'react';
import GifList from '../../components/GifList';
import useGifs from '../../hooks/useGifs';

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  if (loading) return <span>Loading... 🌀</span>;

  return (
    <GifList gifs={gifs}/>
  );
};

export default SearchResults;
