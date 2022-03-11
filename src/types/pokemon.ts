export interface IPokemon {
  name: string;
  url: string;
}

export interface IUserPokemons extends IPokemon {
  isFavotite: boolean;
}
