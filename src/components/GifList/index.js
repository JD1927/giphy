import React from 'react';
import Gif from 'components/Gif';
import './GifList.css';

const GifList = ({ gifs }) => {
  return (
    <div className="GifList">
      {
        gifs && gifs.length !== 0 ? (
          gifs.map(({ id, title, url }) => (
            <Gif key={id} id={id} title={title} url={url} />
          ))
        ) : (
          <div>There are not gifs...</div>
        )
      }
    </div>
  );
};

export default GifList;
