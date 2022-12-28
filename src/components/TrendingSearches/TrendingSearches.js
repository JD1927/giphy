import Category from 'components/Category';
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

  return <Category name="Trending Topics" options={trends} />;
};

export default TrendingSearches;