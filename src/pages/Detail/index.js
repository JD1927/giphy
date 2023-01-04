import React from 'react';
import Gif from 'components/Gif';
import './Detail.css';
import useSingleGif from 'hooks/useSingleGif';
import Spinner from 'components/Spinner';
import { Redirect } from 'wouter';

const Detail = ({ params }) => {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  if (isLoading) return <Spinner/>;
  if (isError) return <Redirect to='/404'/>;
  if (!gif) return null;

  return (
    <div className='Detail'>
      <Gif {...gif}/>
    </div>
  );
};

export default Detail;
