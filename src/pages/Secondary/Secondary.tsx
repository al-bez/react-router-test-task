import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <Box>
      <Typography color="error.dark" variant="h4">
        This is Secondary page
      </Typography>
      <Link to="/">Dashboard</Link>
    </Box>
  );
};

export default Dashboard;
