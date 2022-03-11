import React from 'react';
import { IUserPokemons } from '../types';
interface IPokemonContext {
  userList: IUserPokemons[];
  loading: boolean;
  favoritesCount: number;
  toggleFavourite: (pokemon: IUserPokemons) => void;
}

const defaultState = {
  userList: [],
  loading: true,
  favoritesCount: 0,
  toggleFavourite: (pokemon: IUserPokemons) => {},
};

const PokemonContext = React.createContext<IPokemonContext>(defaultState);
export default PokemonContext;
