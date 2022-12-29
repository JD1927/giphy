import React from 'react';
import GifList from 'components/GifList';
import useGifs from 'hooks/useGifs';
import Spinner from 'components/Spinner';

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });

  const handleNextPage = () => setPage(prev => prev + 1);

  return (
    <>
      {
        loading
          ? <Spinner/>
          : (
            <>
              <h3>Results for: {decodeURI(keyword)}</h3>
              <GifList gifs={gifs}/>
              <button onClick={handleNextPage}>Get next page</button>
            </>
          )
      }
    </>
  );
};

export default SearchResults;
