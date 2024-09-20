import React from 'react';
import { Box } from '@mui/material';

export interface Props {
  title: string | React.ReactNode;
  headerControls?: React.ReactNode;
}

const PageHeader: React.FC<Props> = ({ title, headerControls }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: 1,
        height: '6rem',
        backgroundColor: 'white',
        padding: '2rem',
      }}
    >
      <div>{title}</div>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        {headerControls}
      </Box>
    </Box>
  );
};

export default PageHeader;
