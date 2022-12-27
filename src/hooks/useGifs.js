import { useContext, useEffect, useState } from 'react';
import { getGifs } from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const useGifs = ({ keyword } = { keyword: null }) => {
  const [loading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifsContext);

  useEffect(() => {
    const fetchGifs = async () => {
      setLoading(true);
      const keywordToUse = keyword || localStorage.getItem('lastKeyword');
      const requestedGifs = await getGifs({ keyword: keywordToUse });
      setGifs([...requestedGifs]);
      setLoading(false);
      localStorage.setItem('lastKeyword', keyword);
    }
    fetchGifs();
  }, [keyword, setGifs]);

  return { loading, gifs };
}

export default useGifs