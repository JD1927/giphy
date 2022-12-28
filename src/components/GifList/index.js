import React from 'react';
import Gif from 'components/Gif';
import './GifList.css';
import Spinner from 'components/Spinner';

const GifList = ({ gifs, loading }) => {
  return (
    <div className="GifList">
      {loading ? (
        <Spinner />
      ) : (
        gifs.map(({ id, title, url }) => (
          <Gif key={id} id={id} title={title} url={url} />
        ))
      )}
    </div>
  );
};

export default GifList;
