import { useEffect, useState } from 'react';
import { getSingleGif } from 'services/getSingleGif';
import useGifs from './useGifs';

const useSingleGif = ({ id }) => {
  const { gifs } = useGifs();
  const gifFromCache = gifs.find((singleGif) => singleGif.id === id);

  const [gif, setGif] = useState(gifFromCache);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const handleSingleGif = async () => {
      try {
        if (!gif) {
          setIsLoading(true);
          setGif(await getSingleGif({ id }));
          setIsLoading(false);
          setIsError(false);
        }
      } catch {
        setIsLoading(false);
        setIsError(true);
      }

    };
    handleSingleGif();
  }, [id, gif]);

  return { gif, isLoading, isError };
};

export default useSingleGif;
