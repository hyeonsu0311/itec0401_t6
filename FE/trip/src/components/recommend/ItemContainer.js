import React from 'react';
import RecommendItem from './RecommendItem';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const ItemContainer = ({ places }) => {
    return (
        <Box 
            sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                flexGrow: 1 
            }}
        >
            <Grid 
                container 
                spacing={2} 
                sx={{ maxWidth: 1200 }} // Adjust maxWidth as needed
            >
                {places.map((place, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <RecommendItem place={place} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ItemContainer;
