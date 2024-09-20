import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, Typography, Button } from '@mui/material';
// import { useOfficeState } from '../../store'; // Replace with your actual store hook
import Layout from '../Layout/Layout' // Ensure this component is using MUI

const Home: React.FC = () => {
  //   const { officesStore } = useOfficeState(); // Access state from your store

  return (
    <Layout>
      <Typography variant="body1">Use Office State on Home Page</Typography>
      <Typography variant="body1">This is a TypeScript component</Typography>
      <Link to="/offices" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' ,display: 'flex', gap: '1px'}}>
        <Typography variant="body1">
          Offices
        </Typography>
        <Typography variant="body1">
          Check this
        </Typography>
      </Link>
    </Layout>
  );
};

export default Home;
