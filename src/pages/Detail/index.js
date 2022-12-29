import React from 'react';
import Gif from 'components/Gif';
import useGlobalGifs from 'hooks/useGlobalGifs';
import './Detail.css';

const Detail = ({ params }) => {
  const { id } = params;
  const gifs = useGlobalGifs();

  const gif = gifs.find(singleGif => singleGif.id === id);

  return (
    <div className='Detail'>
      <Gif {...gif}/>
    </div>
  );
};

export default Detail;
