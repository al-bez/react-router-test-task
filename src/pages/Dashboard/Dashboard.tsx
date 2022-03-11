import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <>
      <Typography color="primary" variant="h4">
        This is Dashboard page
      </Typography>
      <Link to="/secondary">Secondary</Link>
    </>
  );
};

export default Dashboard;
