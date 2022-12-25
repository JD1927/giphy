import React, { useEffect, useState } from 'react';
import { getGifs } from '../services/getGifs';
import Gif from './Gif';
import './GifList.css';

const GifList = ({ params }) => {
  const [gifs, setGifs] = useState([]);
  const { keyword } = params;

  useEffect(() => {
    const fetchGifs = async () => {
      const requestedGifs = await getGifs({ keyword });
      setGifs([...requestedGifs]);
    }
    fetchGifs();
  }, [keyword]);

  return (
    <div className='GifList'>
      {
        gifs.map(({ id, title, url }) => (
          <Gif
            key={id}
            id={id}
            title={title}
            url={url}
          />
        ))
      }
    </div>
  );
};

export default GifList;
