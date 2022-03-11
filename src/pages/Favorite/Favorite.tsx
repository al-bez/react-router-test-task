import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { PokemonContext } from '../../utils';
import { Spinner, List } from '../../components';

const Favorite = () => {
  const { userList, loading } = useContext(PokemonContext);

  return loading ? <Spinner /> : <List items={userList} />;
};

export default Favorite;
