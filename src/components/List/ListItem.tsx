import React from 'react';
import { Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { IUserPokemons } from '../../types';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: '8px 16px',
    border: '1px solid #000',
    cursor: 'pointer',
    '&:not(:last-child)': {
      marginBottom: 10,
    },
  },
}));

interface ListItemProps {
  item: IUserPokemons;
  action?: (pokemon: IUserPokemons) => void;
}

const ListItem = ({ item, action }: ListItemProps) => {
  const classes = useStyles();
  const trigger = item.isFavotite;

  return (
    <Box
      className={classes.root}
      sx={{ backgroundColor: !action && trigger ? 'purple' : '#fefefe' }}
    >
      {item.name}
      {action && (
        <Button
          variant="contained"
          sx={{
            color: '#000',
            marginLeft: 10,
            backgroundColor: trigger ? 'purple' : '#fefefe',
          }}
          onClick={() => action(item)}
        >
          Favotite
        </Button>
      )}
    </Box>
  );
};

export default ListItem;
