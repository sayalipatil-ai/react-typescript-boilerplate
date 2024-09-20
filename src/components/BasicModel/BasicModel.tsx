import React from 'react';
import { Modal, Typography, Box, IconButton, Button} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface BasicModalProps {
  open: boolean;
  title: string;
  handleClose: () => void;
  children: React.ReactNode; // Ensure this prop is defined
}

const BasicModal: React.FC<BasicModalProps> = ({ open, title, handleClose, children }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 1,
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <IconButton
          onClick={handleClose}
          sx={{ position: 'absolute', top: 8, right: 8 }}
        >
          <CloseIcon />
        </IconButton>
        <Box mt={2}>{children}</Box>
       
        <Box mt={3} sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button
            onClick={handleClose}
            sx={{
              backgroundColor: 'white',
              color: 'blue',
              border: '1px solid blue',
              width: '5rem',
              '&:hover': {
                backgroundColor: '#f0f0f0', // Hover effect
              },
            }}
          >
            Close
          </Button>
          <Button
            sx={{
              backgroundColor: 'blue',
              color: 'white',
              width: '5rem',
              '&:hover': {
                backgroundColor: '#0047ab', // Darker blue on hover
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default BasicModal;
