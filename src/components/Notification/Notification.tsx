import React from 'react';
import { Grid } from '@mui/material';
import { Warning, WarningAmber, Info } from '@mui/icons-material';
import './notification.css'; // Import the CSS file

interface NotificationProps {
  type: 'warning' | 'info' | 'error';
  children: React.ReactNode;
}

const colors = {
  warning: '#FFCC00',
  error: '#FF4444',   
  info: '#33B5E5',    
};

const iconMap = {
  warning: <Warning style={{ fontSize: '24px', color: colors.warning }} />,
  error: <WarningAmber style={{ fontSize: '24px', color: colors.error }} />,
  info: <Info style={{ fontSize: '24px', color: colors.info }} />,
};

const Notification: React.FC<NotificationProps> = ({ type, children }) => {
  const selectedIcon = iconMap[type];

  return (
    <Grid
      container
      alignItems="center"
      className={`notification-container notification-${type}`} // Adjusted class names
      sx={{ boxShadow: '0px 8px 5px rgba(0, 0, 0, 0.16)' }}
    >
      <div className="notification-icon">{selectedIcon}</div> {/* Adjusted class name */}
      <div>{children}</div>
    </Grid>
  );
};

export default Notification;
