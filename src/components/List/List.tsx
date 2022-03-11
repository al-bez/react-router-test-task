import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { IUserPokemons } from '../../types';
import ListItem from './ListItem';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));

interface ListProps {
  items: IUserPokemons[];
  action?: (pokemon: IUserPokemons) => void; // change later
}

const List = ({ items, action }: ListProps) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {items.map((item) => (
        <ListItem key={item.url} item={item} action={action} />
      ))}
    </Box>
  );
};

export default List;
