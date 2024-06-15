import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Box, IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ImageComponent({ firstimage }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? firstimage.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === firstimage.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (firstimage.length === 0) {
    return (
      <Box id="picture" sx={{ marginTop: 4, textAlign: 'center' }}>
        <Typography variant="h4" component="div" sx={{ marginBottom: 2 }}>
          여행 사진
        </Typography>
        <Typography variant="body1" color="text.secondary">
          이미지를 찾을 수 없습니다.
        </Typography>
      </Box>
    );
  }

  return (
    <Box id="picture" sx={{ marginTop: 4 }}>
      <Card sx={{ maxWidth: 800, margin: 'auto', position: 'relative' }}>
        <IconButton
          onClick={handlePrevImage}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            zIndex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
            },
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <CardMedia
          component="img"
          alt="여행 사진"
          sx={{ height: 500, objectFit: 'cover' }}
          image={firstimage[currentImageIndex]}
          title="여행 사진"
        />
        <IconButton
          onClick={handleNextImage}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
            },
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        
      </Card>
    </Box>
  );
}

export default ImageComponent;
