const API_KEY = `jI8zZlq3eqqXAM7aqKJrO9y3nV3bYkRN`

export const getGifs = async ({keyword = 'morty'} = {}) => {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  const res = await fetch(API_URL);
  const response = await res.json();
  const { data } = response;
  const requestedGifs = data.map(image => {
    const { title, id, images } = image;
    const { url } = images.downsized_medium;

    return { id, title, url };
  });

  return requestedGifs;
};