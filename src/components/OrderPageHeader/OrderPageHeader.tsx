import React, { useState } from 'react';
import { Box, Button as MuiButton, Menu, MenuItem, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Replace '../../../../components' with the correct path to your custom components
import PageHeader from '../PageHeader/PageHeader';

const buttonStyle = { marginRight: '16px', paddingTop: '0', paddingBottom: '0' };

const classes = {
  iconContainer: 'border-l pl-2',
};

const DropDownIcon: React.FC = () => (
  <Box className={classes.iconContainer}>
    <ArrowDropDownIcon />
  </Box>
);

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
              maxHeight: 48 * 4.5 + 8,
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

export const OrderPageHeader: React.FC = () => {
  return (
    <Box height="8rem" justifyContent="space-between" marginTop="-40px" > 
    <PageHeader
      title={<Typography variant="h6" style={{ margin: 0 }}>Order # 4546454</Typography>}
      headerControls={
        <Box display="flex" alignItems="center">
          <Button
            variant="outlined"
            label="MODE"
            sx={buttonStyle}
            size="medium"
            endIcon={<DropDownIcon />}
            dropdownItems={['First Item', 'Second Item', 'Third Item']}
          />
          <Button
            variant="outlined"
            label="SECONDARY"
            size="medium"
            sx={buttonStyle}
          />
          <Button
            variant="outlined"
            label="DOCUMENTS"
            size="medium"
            sx={buttonStyle}
            endIcon={<DropDownIcon />}
            dropdownItems={['First Item', 'Second Item', 'Third Item']}
          />
          <Button
            variant="contained"
            label="SAVE"
            size="medium"
            sx={buttonStyle}
          />
          <Box>
            <Typography variant="body2" component="span">
              <h2>Margin 10.2% / Profit $270.00</h2>
            </Typography>
          </Box>
        </Box>
      }
    />
  </Box>
  );
};
