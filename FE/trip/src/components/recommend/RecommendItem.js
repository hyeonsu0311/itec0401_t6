'use client'

import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import CardContent from '@mui/joy/CardContent';
import { flexBox } from '@mui/system'
// import { useNavigate } from 'react-router-dom';
import Box from '@mui/joy/Box';
import { useState } from 'react';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';

import { useRouter } from 'next/navigation';
import styles from './RecommendTemplate.module.css';


const RecommendItem = ({place}) => {
    const navigate = useRouter();

    const handleNavigate = () => {
        navigate.push('/places/${place.contentid}')
    };

    const [liked, setLiked] = useState(false);

    const places = [
        {
            addr:"경상남도 통영시 해평5길 142-16",
            image:"http://tong.visitkorea.or.kr/cms/resource/22/2367622_image2_1.jpg",
            title:"김춘수 유품전시관",
            contentid:"1000981"
        },
        {
            addr:"대구광역시 수성구 신천동로86안길 14-6",
            image:"http://tong.visitkorea.or.kr/cms/resource/28/1970128_image2_1.jpg",
            title:"[대구올레 팔공산 3코스] 부인사 도보길",
            contentid:"1008532",
        },
        {
            addr:"대구광역시 수성구 무학로 78",
            image:"/images/수성못.png" 
        }
    ]
    return (
        <Box className={styles.item}>
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
                        <IconButton
                            size="sm"
                            variant="solid"
                            sx={{
                                backdropFilter: 'blur(5px)',
                                position: 'absolute',
                                top: 8,
                                right: 8,
                                
                            }}
                        >
                            {liked ? <Favorite /> : <Favorite />}
                        </IconButton>
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
                        // onClick={handleLike} // Like button click handler
                        // // onClickCapture={(event) => event.stopPropagation()} // Prevent propagation on capture phase
                    >
                        {liked ? <Favorite /> : <FavoriteBorder />}
                    </IconButton>
                </Box>
            </Card>
        </Box>
    );
};

export default RecommendItem;
