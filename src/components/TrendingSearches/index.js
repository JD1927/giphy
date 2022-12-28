import { useEffect, useState } from 'react';
import { getTrendingTerms } from 'services/getTrendingTerms';
import useNearScreen from 'hooks/useNearScreen';
import Category from 'components/Category';

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



const LazyTrending = () => {
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <div ref={fromRef}>
      {isNearScreen ? <TrendingSearches /> : null}
    </div>
  );
};

export default LazyTrending;
