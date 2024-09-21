import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import Layout from '../../layout/Layout';
import { ConfigManager } from '../../utils/ConfigManager';
import './carrier.css'; // Assuming you have styles in a CSS file

const Carriers: React.FC = () => {
  return (
    <Layout>
      <Box className="container mainContainer">
        <p className="text">Carriers</p>
        <div className="inline-container">
          <Link to="/" className='link'>Dashboard</Link>
          <span className="info">API URL: {ConfigManager.apiUrl}</span>
        </div>
          <span className="info">ENV: {ConfigManager.env}</span>
      </Box>
    </Layout>
  );
};

export default Carriers;
