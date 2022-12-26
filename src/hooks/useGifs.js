import { useEffect, useState } from 'react';
import { getGifs } from '../services/getGifs';

const useGifs = ({ keyword } = { keyword: null }) => {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

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
  }, [keyword]);

  return { loading, gifs };
}

export default useGifs