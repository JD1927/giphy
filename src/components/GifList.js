import React, { useEffect, useState } from 'react';
import { getGifs } from '../services/getGifs';
import Gif from './Gif';
import './GifList.css';

const GifList = ({ keyword }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchGifs = async () => {
      setLoading(true);
      const requestedGifs = await getGifs({ keyword });
      setGifs([...requestedGifs]);
      setLoading(false);
    }
    fetchGifs();
  }, [keyword]);

  if (loading) return <span>Loading... 🌀</span>;

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
