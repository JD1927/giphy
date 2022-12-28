import React from 'react';
import GifList from '../../components/GifList';
import useGifs from '../../hooks/useGifs';

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  if (loading) return <span>Loading... 🌀</span>;

  return (
    <>
      <h3>Results for: {decodeURI(keyword)}</h3>
      <GifList gifs={gifs}/>
    </>
  );
};

export default SearchResults;
