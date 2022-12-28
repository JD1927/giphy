import React, { Suspense } from 'react';
import useNearScreen from 'hooks/useNearScreen';

const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
);

const LazyTrending = () => {
  const { isNearScreen, fromRef } = useNearScreen();

  return (
    <div ref={fromRef}>
      <Suspense fallback={null}>
        {isNearScreen ? <TrendingSearches /> : null}
      </Suspense>
    </div>
  );
};

export default LazyTrending;
