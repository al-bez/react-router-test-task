import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { List, Spinner } from '../../components';
import { PokemonContext } from '../../utils';

const Dashboard = () => {
  const { userList, loading, favoritesCount, toggleFavourite } =
    useContext(PokemonContext);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <Link to="/favourite"> {favoritesCount} favourite pokemons</Link>
      <List items={userList} action={toggleFavourite} />
    </>
  );
};

export default Dashboard;
