import React from 'react';
import { ArrowDownward, ArrowUpward, InfoOutlined } from '@mui/icons-material';
import { Grid, Typography, Box } from '@mui/material';

// Assuming SVGComponent is a functional component that returns SVG in a div
import SVGComponent from '../LTLQuote/SVGComponent';

const LTLQuote: React.FC = () => {
  return (
    <Grid container spacing={2} p={2} className="text-base">
      <Grid item xs={3}>
        <Typography
          variant="h6"
          color="#026EA1DE"
          fontWeight="bold"
          textAlign="left"
          mb={2}
          sx={{ textDecoration: 'underline', fontFamily: 'Inter' }}
        >
          Xpo Logistics
        </Typography>
        <h2 style={{marginTop:"-10px"}}><span style={{color:'red'}}>XPO</span>Logistics</h2>
      </Grid>
      <Grid item xs={2}>
        <Typography
          variant="h6"
          color="#026EA1DE"
          textAlign="left"
          mb={2}
          sx={{ textDecoration: 'underline', fontFamily: 'Inter' }}
        >
          Quote
        </Typography>
        <Typography variant="body2">
          <b>ID:</b> <span style={{ color: '#666666', fontWeight: 'bold' }}>6237632027930</span>
          <br />
          <b>By:</b> <span style={{ color: '#666666', fontWeight: 'bold' }}>Joe Notcrachiolo</span>
        </Typography>
      </Grid>
      <Grid item xs={2} container direction="column" alignItems="center">
        <Typography
          variant="h6"
          color="#026EA1DE"
          fontWeight="bold"
          textAlign="left"
          mb={2}
          sx={{ textDecoration: 'underline', fontFamily: 'Inter' }}
        >
          Accessorials
        </Typography>
        <Box 
  display="flex" 
  flexDirection="column" 
  alignItems="center"
> 
  <ArrowUpward style={{ color: '#06910B' }} />
  <ArrowDownward style={{ color: '#B00020' }} />
  <InfoOutlined style={{ color: '#0070A2' }} />
</Box>
      </Grid>
      <Grid item xs={3}>
        <Typography
          variant="h6"
          color="#026EA1DE"
          fontWeight="bold"
          textAlign="left"
          mb={2}
          sx={{ textDecoration: 'underline', fontFamily: 'Inter' }}
        >
          Max Carrier Liability
        </Typography>
        <div className="flex flex-col">
          <Typography variant="body2">
            <b>New:</b> <span style={{ color: '#666666', fontWeight: 'bold' }}> $--.--</span>
          </Typography>
          <Typography variant="body2">
            <b>Used:</b> <span style={{ color: '#666666', fontWeight: 'bold' }}> $400.00</span>
          </Typography>
          <Typography variant="body2" color="#1D6FF8DE" sx={{ textDecoration: 'underline', cursor: 'pointer', fontWeight: 'bold' }}>
            View Terminal Info
          </Typography>
        </div>
      </Grid>
      <Grid item xs={2} container direction="column" alignItems="center">
        <Typography
          variant="h6"
          color="#026EA1DE"
          fontWeight="bold"
          textAlign="left"
          mb={2}
          sx={{ textDecoration: 'underline', fontFamily: 'Inter' }}
        >
          Amount
        </Typography>
        <Grid container>
          <Grid item xs={6} className="border-r-2" container direction="column" alignItems="center">
            <Typography variant="h6" sx={{ color: '#06910B', fontWeight: 'bold' }}>
              $260.63
            </Typography>
            <Typography variant="body2" color="#666666">
              Carrier
            </Typography>
          </Grid>
          <Grid item xs={6} container direction="column" alignItems="flex-end">
            <Typography variant="h6" sx={{ color: '#06910B', fontWeight: 'bold' }}>
              $260.63
            </Typography>
            <Typography variant="body2" color="#666666">
              Customer
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LTLQuote;
