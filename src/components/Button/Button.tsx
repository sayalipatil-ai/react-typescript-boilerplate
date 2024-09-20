import React, { useState } from 'react';
import { Button as MuiButton, Menu, MenuItem } from '@mui/material';

type ButtonProps = {
  label: string;
  variant: 'outlined' | 'contained';
  size: 'small' | 'medium' | 'large';
  sx?: object;
  endIcon?: React.ReactNode;
  dropdownItems?: string[];
};

const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  size,
  sx,
  endIcon,
  dropdownItems,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (dropdownItems) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <MuiButton
        variant={variant}
        size={size}
        sx={sx}
        endIcon={endIcon}
        onClick={handleClick}
      >
        {label}
      </MuiButton>
      {dropdownItems && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            elevation: 1,
            style: {
              maxHeight: 48 * 4.5 + 8, // Adjust height for items
              width: 'auto',
            },
          }}
        >
          {dropdownItems.map((item, index) => (
            <MenuItem key={index} onClick={handleClose}>
              {item}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  );
};

export default Button;
