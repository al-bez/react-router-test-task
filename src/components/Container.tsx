import { Box, BoxProps } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '75vw',
    height: '75vh',
    margin: 'auto auto',
    border: '1px solid red',
  },
}));

const Container = ({ children, ...props }: BoxProps) => {
  const classes = useStyles();
  return (
    <Box className={classes.root} {...props}>
      {children}
    </Box>
  );
};

export default Container;
