import { api } from '../utils';

export const getPokemons = async (limit: number) => {
  const res = await api.get(`/pokemon?limit=${limit}`);
  return res.data.results;
};
