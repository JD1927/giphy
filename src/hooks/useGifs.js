import { useContext, useEffect, useState } from 'react';
import { getGifs } from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0;

const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  const { gifs, setGifs } = useContext(GifsContext);

  const keywordToUse = keyword || localStorage.getItem('lastKeyword');

  useEffect(() => {
    const fetchGifs = async () => {
      setLoading(true);
      const requestedGifs = await getGifs({ keyword: keywordToUse });
      setGifs([...requestedGifs]);
      setLoading(false);
      localStorage.setItem('lastKeyword', keyword);
    }
    fetchGifs();
  }, [keywordToUse, setGifs, keyword]);

  useEffect(() => {
    const handlePagination = async () => {
      if (page === INITIAL_PAGE) return;
      setLoadingNextPage(true);
      const nextGifs = await getGifs({ keyword: keywordToUse, page });
      setGifs(prevGifs => prevGifs.concat(nextGifs))
      setLoadingNextPage(false);
    };
    handlePagination();
  }, [page, keywordToUse, setGifs])

  return { loading, gifs, loadingNextPage, setPage };
}

export default useGifs