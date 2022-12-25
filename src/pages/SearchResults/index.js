import React from 'react';
import GifList from '../../components/GifList';

const SearchResults = ({ params }) => {
  const { keyword } = params;
  return <GifList keyword={keyword}/>;
};

export default SearchResults;
