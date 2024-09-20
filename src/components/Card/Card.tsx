import React, { useState } from 'react';
import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  Typography,
  Grid,
  IconButton,
} from '@mui/material';
import {
  PlayCircleOutlineOutlined,
  ArrowDropDownCircleOutlined,
} from '@mui/icons-material';

import { cardStyles } from './card.style';

interface Props {
  startTitle?: string;
  endTitle?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  children: React.ReactNode;
  raised?: boolean;
  action?: React.ReactNode;
  accordion?: boolean;
  expanded?: boolean;
  onToggle?: () => void;
}

const Card: React.FC<Props> = ({
  startTitle,
  endTitle,
  startIcon,
  endIcon,
  children,
  raised,
  action,
  accordion = true,
  expanded = true,
  onToggle,
}) => {
  const [isExpanded, setIsExpanded] = useState(accordion ? expanded : true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <MuiCard raised={raised} sx={cardStyles.card}>
      <CardHeader
        sx={cardStyles.cardHeader}
        title={
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item sx={cardStyles.gridItem}>
              {accordion && (
                <IconButton onClick={handleToggle} sx={cardStyles.accordionIcon}>
                  {isExpanded ? <ArrowDropDownCircleOutlined /> : <PlayCircleOutlineOutlined />}
                </IconButton>
              )}
              <Typography variant="body2" component="span" sx={cardStyles.startIcon}>
                {startIcon}
              </Typography>
              <Typography variant="body2" component="span">
                {startTitle}
              </Typography>
            </Grid>
            <Grid item sx={cardStyles.gridItem}>
              <Typography variant="body2" component="span">
                {endTitle}
              </Typography>
              <Typography variant="body2" component="span" sx={cardStyles.endIcon}>
                {endIcon}
              </Typography>
            </Grid>
          </Grid>
        }
        action={action}
      />
      <CardContent
        sx={{
          display: isExpanded ? 'block' : 'none',
          ...cardStyles.cardContent,
        }}
      >
        {children}
      </CardContent>
    </MuiCard>
  );
};

export default Card;
