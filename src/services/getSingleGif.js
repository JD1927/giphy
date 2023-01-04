import { API_KEY, API_URL } from './settings';

export const getSingleGif = async ({ id }) => {
  const _url = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;

  const res = await fetch(_url);
  const response = await res.json();
  const { data } = response;
  const { title, images } = data;
  const { url } = images.downsized_medium;

  return { id, title, url };
};