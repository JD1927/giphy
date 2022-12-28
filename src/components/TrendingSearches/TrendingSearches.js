import Category from 'components/Category';
import Spinner from 'components/Spinner';
import React, { useEffect, useState } from 'react';
import { getTrendingTerms } from 'services/getTrendingTerms';

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const fetchTrendingTerms = async () => {
      setTrends(await getTrendingTerms());
    };
    fetchTrendingTerms();
  }, []);

  return (
    <>
      {
        trends.length !== 0
          ? (<Category name="Trending Topics" options={trends} />)
          : (<Spinner/>)
      }

    </>
  );
};

export default TrendingSearches;