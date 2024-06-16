'use client'
import * as React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Box, Card, CardCover, IconButton, Typography } from '@mui/joy';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import AspectRatio from '@mui/joy/AspectRatio';

const PlaceItem = ({ place }) => {
    const router = useRouter();
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        const storedLikes = JSON.parse(localStorage.getItem('likedPlaces')) || [];
        const isLiked = storedLikes.some(item => item.contentid === place.contentid && item.contenttypeid === place.contenttypeid);
        if (isLiked) {
            setLiked(true);
        }
    }, [place.contentid, place.contenttypeid]);

    const handleNavigate = () => {
        router.push(`/detailview/${place.contenttypeid}/${place.contentid}`);
    };

    const handleLike = async (event) => {
        event.stopPropagation(); // Prevent event from propagating to parent
        setLiked(!liked); // Toggle the liked state

        const storedLikes = JSON.parse(localStorage.getItem('likedPlaces')) || [];
        let updatedLikes;

        if (!liked) {
            // Add place to localStorage
            updatedLikes = [...storedLikes, place];
        } else {
            // Remove place from localStorage
            updatedLikes = storedLikes.filter(item => item.contentid !== place.contentid || item.contenttypeid !== place.contenttypeid);
        }

        localStorage.setItem('likedPlaces', JSON.stringify(updatedLikes));
    };

    return (
        <Box className="item">
            <Card
                variant="outlined"
                sx={{
                    width: 240,
                    bgcolor: 'background.paper',
                    p: 0,
                    position: 'relative',
                    margin: '1vw',
                    boxShadow: 3,
                    transition: 'transform 0.2s',
                    '&:hover': {
                        transform: 'scale(1.05)',
                    },
                }}
                onClick={handleNavigate} // Card click handler
            >
                <Box sx={{ position: 'relative' }}>
                    <AspectRatio ratio="4/3">
                        <figure>
                            <img
                                src={place.image + "auto=format&fit=crop&w=300"}
                                srcSet={place.image}
                                loading="lazy"
                                alt={place.title}
                                style={{ borderRadius: '4px' }}
                            />
                        </figure>
                    </AspectRatio>
                    <CardCover
                        className="gradient-cover"
                        sx={{
                            display: 'flex',
                            opacity: 0,
                            transition: 'opacity 0.3s ease-in-out, background-color 0.3s ease-in-out',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0) 100px)',
                            borderRadius: '4px',
                            '&:hover': {
                                opacity: 1,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darken the card
                            },
                        }}
                    >
                        <Box
                            sx={{
                                flexDirection: 'column',
                                p: 2,
                                gap: 1.5,
                                alignItems: 'flex-start',
                                justifyContent: 'flex-end',
                                color: 'white',
                                zIndex: 1, // Ensure text is above the overlay
                            }}
                        >
                            <Typography level="h2" sx={{ fontSize: 'md', color: '#fff' }}>
                                {place.title}
                            </Typography>
                            <Typography level="body2" sx={{ fontSize: 'small', color: '#fff' }}>
                                {place.addr}
                            </Typography>
                        </Box>
                    </CardCover>
                    <IconButton
                        size="sm"
                        variant="solid"
                        sx={{
                            color: liked ? 'red' : 'white',
                            bgcolor: liked ? 'rgba(255, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.5)',
                            backdropFilter: 'blur(5px)',
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            '&:hover': {
                                bgcolor: liked ? 'rgba(255, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.7)',
                            },
                        }}
                        onClick={handleLike} // Like button click handler
                        // onClickCapture={(event) => event.stopPropagation()} // Prevent propagation on capture phase
                    >
                        {liked ? <Favorite /> : <FavoriteBorder />}
                    </IconButton>
                </Box>
            </Card>
        </Box>
    );
};

export default PlaceItem;