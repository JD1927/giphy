import React, { useContext } from 'react';
import GifsContext from '../../context/GifsContext';

const Detail = ({ params }) => {

  const { id } = params;
  const { gifs } = useContext(GifsContext);
  console.log({gifs});

  return <div>{id}</div>;
};

export default Detail;
