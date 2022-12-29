import { API_KEY, API_URL } from './settings';

export const getGifs = async ({ limit = 25, keyword = 'morty', page = 0 } = {}) => {
  const url = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=g&lang=en`;

  const res = await fetch(url);
  const response = await res.json();
  const { data } = response;
  const requestedGifs = data.map(image => {
    const { title, id, images } = image;
    const { url } = images.downsized_medium;

    return { id, title, url };
  });

  return requestedGifs;
};