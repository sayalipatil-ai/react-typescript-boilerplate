
import React from 'react';
import { Box } from '@mui/material';
import Header from '../components/Header/Header'; // Adjust the import path as needed
import Sidebar from '../components/Sidebar/Sidebar'; // Adjust the import path as needed
import './layout.css'; // Ensure this file contains the necessary styles


type Props = {
  children?: React.ReactNode; // Allow children to be optional
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box className="container">
      <Box className="header" sx={{ height: '5vh' }}>
        <Header />
      </Box>
      <Box className="main">
        <Box className="content" sx={{ height: '91vh' }}>
          <Box className="sidebar">
            <Sidebar />
          </Box>
          <Box className="childrenContainer">{children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
