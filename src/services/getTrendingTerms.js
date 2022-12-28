import { API_KEY, API_URL } from './settings';

export const getTrendingTerms = async () => {
  const url = `${API_URL}/trending/searches?api_key=${API_KEY}`;
  const res = await fetch(url);
  const response = await res.json();
  const { data } = response;

  return data;
};
