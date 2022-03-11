import { useEffect, useState } from 'react';
import { getPokemons } from '../services';
import { IPokemon, IUserPokemons } from '../types';
import { PokemonContext } from '../utils';

const LIMIT = 5;

interface PokemonContainerProps {
  children: React.ReactNode;
}

function helper(pokemons: IUserPokemons[]) {
  const result: IUserPokemons[] = [];
  pokemons.forEach((pokemon) => {
    result.push({ ...pokemon, isFavotite: false });
    return result;
  });

  return result;
}

const PokemonContainer = ({ children }: PokemonContainerProps) => {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [userList, setUserList] = useState<IUserPokemons[]>([]);
  const favoritesCount = userList.filter((el) => el.isFavotite).length; // change any later

  console.log(userList);

  const fetchPokemons = async () => {
    try {
      const pokemons = await getPokemons(LIMIT);
      setPokemons(pokemons);
      setUserList(helper(pokemons));
      setLoading(false);
    } catch (err) {
      throw err;
    }
  };

  const toggleFavourite = (pokemon: IUserPokemons) => {
    const item = userList.find(
      (el) => el.isFavotite && el.name === pokemon.name
    );

    if (item) {
      // remove item
      const newArr = userList.map((el) => {
        if (el.name === pokemon.name) el.isFavotite = false;
        return el;
      });
      setUserList(newArr);
    } else {
      console.log('ADD');
      // add item
      // code duplication (fix)
      const newArr = userList.map((el) => {
        if (el.name === pokemon.name) el.isFavotite = true;
        return el;
      });
      setUserList(newArr);
      // ---------------------
    }
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{ userList, loading, favoritesCount, toggleFavourite }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContainer;
