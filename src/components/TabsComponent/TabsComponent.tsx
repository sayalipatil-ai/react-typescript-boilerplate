import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Box, Typography, IconButton } from '@mui/material';

interface TabsComponentProps {
  tabs: Array<string | React.ReactNode>;
  activeTab: number;
  onTabClick: (index: number) => void;
}

const TabsComponent: React.FC<TabsComponentProps> = ({ tabs, activeTab, onTabClick }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);

  const scrollLeft = () => {
    if (!showLeftButton) return;
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - 500,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (!showRightButton) return;
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + 500,
        behavior: 'smooth',
      });
    }
  };

  const checkOverflow = () => {
    if (containerRef.current && contentRef.current) {
      const isScrolledToLeft = containerRef.current.scrollLeft === 0;
      const isScrolledToRight =
        containerRef.current.scrollLeft + containerRef.current.clientWidth >=
        contentRef.current.scrollWidth - 1;

      setShowLeftButton(!isScrolledToLeft);
      setShowRightButton(!isScrolledToRight);
    }
  };

  useEffect(() => {
    checkOverflow();

    const handleUpdate = () => {
      checkOverflow();
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleUpdate);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleUpdate);
      }
    };
  }, []);

  return (
    <Box display="flex" alignItems="center" position="relative">
      <IconButton
        onClick={scrollLeft}
        sx={{
          color: showLeftButton ? 'black' : 'grey',
          pointerEvents: showLeftButton ? 'auto' : 'none',
          cursor: showLeftButton ? 'pointer' : 'default',
          position: 'absolute',
          left: 0,
          zIndex: 10,
        }}
      >
        <ChevronLeft />
      </IconButton>
      <Box
        ref={containerRef}
        display="flex"
        sx={{
          overflowX: 'auto',
          paddingX: 4,
          width: '100%',
        }}
      >
        <Box
          ref={contentRef}
          display="flex"
          
          sx={{
            width: '100%',
          }}
        >
          {tabs.map((tab, index) => (
            <Box
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{
                cursor: 'pointer',
                borderBottom: 2,
                minWidth: 150,
                borderColor: activeTab === index ? 'blue' : 'transparent',
              }}
              onClick={() => onTabClick(index)}
            >
              <Typography variant="body2">{tab}</Typography>
              <Typography variant="body2">Tab {index}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
      <IconButton
        onClick={scrollRight}
        sx={{
          color: showRightButton ? 'black' : 'grey',
          pointerEvents: showRightButton ? 'auto' : 'none',
          cursor: showRightButton ? 'pointer' : 'default',
          position: 'absolute',
          right: 0,
          zIndex: 10,
        }}
      >
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default TabsComponent;
