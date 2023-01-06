import React, { useEffect, useRef, useCallback } from 'react';
import GifList from 'components/GifList';
import useGifs from 'hooks/useGifs';
import Spinner from 'components/Spinner';
import './SearchResults.css';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import { Helmet } from 'react-helmet';

const SearchResults = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });

  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });
  const title = gifs ? `${gifs.length} results for ${keyword}` : '';

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 200
  ), [setPage]);

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [isNearScreen, debounceHandleNextPage]);

  return (
    <div className="SearchResults">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title}/>
            <meta name="rating" content="General"/>
          </Helmet>
          <h3>Results for: {decodeURI(keyword)}</h3>
          <GifList gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </div>
  );
};

export default SearchResults;
