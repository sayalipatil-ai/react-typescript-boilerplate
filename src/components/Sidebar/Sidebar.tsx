
import React, { useState } from 'react';
import { Box, ListItemIcon, ListItemText, MenuItem, MenuList, IconButton } from '@mui/material';
import { Settings, Dashboard, ArrowCircleRight, ArrowCircleLeft } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './sidebar.css'; // Import your external CSS

interface MenuItemType {
  label: string;
  icon: JSX.Element;
  path: string;
}

const menuItems: MenuItemType[] = [
  { label: 'Dashboard', icon: <Dashboard />, path: '/' },
  { label: 'Carriers', icon: <Settings />, path: '/carriers' },
];

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <div className="sidebar-container">
      <IconButton
        className="sidebar-toggle-button"
        onClick={() => setIsCollapsed(!isCollapsed)}
        sx={{
          position: 'absolute',
          right: -15,
          top: 1,
          color: 'black',
          '&:hover': {
            backgroundColor: 'transparent', // Ensure no background color on hover
            color: 'black', // Ensure icon color remains black on hover
          },
          '&:focus': {
            outline: 'none', // Remove focus outline
          },
        }}
      >
        {isCollapsed ? <ArrowCircleRight /> : <ArrowCircleLeft />}
      </IconButton>
      <div className={`sidebar-content ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        <Box>
          <MenuList sx={{marginTop:'20px'}} >
            {menuItems.map(({ label, icon, path }) => (
              <MenuItem key={path}>
                <Link to={path} className="menu-link">
                  <ListItemIcon>{icon}</ListItemIcon>
                  {!isCollapsed && <ListItemText primary={label} />}
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </Box>
      </div>
    </div>
  );
};

export default Sidebar;

