import React from 'react';
import Gif from 'components/Gif';
import './Detail.css';
import useSingleGif from 'hooks/useSingleGif';
import Spinner from 'components/Spinner';
import { Redirect } from 'wouter';
import { Helmet } from 'react-helmet';

const Detail = ({ params }) => {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });
  const title = gif ? gif.title : '';
  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Loading...</title>
        </Helmet>
        <Spinner />
      </>
    );
  }
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{title} || GIPHY</title>
      </Helmet>
      <div className="Detail">
        <Gif {...gif} />
      </div>
    </>
  );
};

export default Detail;
