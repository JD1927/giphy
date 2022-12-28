import React, { useEffect, useState } from 'react';
import { getTrendingTerms } from '../../services/getTrendingTerms';
import Category from '../Category';

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    const fetchTrendingTerms = async () => {
      setTrends(await getTrendingTerms());
    };
    fetchTrendingTerms();
  }, []);

  return (
    <Category
      name="Trending Topics"
      options={trends}
    />);
};

export default TrendingSearches;
