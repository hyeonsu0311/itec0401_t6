import * as React from 'react';
import styles from './PlaceItem.module.css';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import CardContent from '@mui/joy/CardContent';
import Favorite from '@mui/icons-material/Favorite';
import { flexBox } from '@mui/system'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/joy/Box';

const PlaceItem = ({place}) => {
    const navigate  = useNavigate();

    const handleNavigate = () => {
        navigate('/places/${place.contentid}')
    };

    return (
        <div className={styles.item} onClick={handleNavigate}>
            <Card
                variant="plain"
                sx={{
                    width: 240,
                    bgcolor: 'initial',
                    p: 0,
                    position: 'relative', // 추가: 카드 상대 위치 설정
                    margin: '1vw'
                }}
            >
                <Box sx={{ position: 'relative' }}>
                    <AspectRatio ratio="4/3">
                        <figure>
                            <img
                                src={place.image + "auto=format&fit=crop&w=300"}
                                srcSet={place.image}
                                loading="lazy"
                                alt={place.title}
                            />
                        </figure>
                    </AspectRatio>
                    <CardCover
                        className="gradient-cover"
                        sx={{
                            display: 'flex',
                            '&:hover, &:focus-within': {
                                opacity: 1,
                            },
                            opacity: 0,
                            transition: '0.1s ease-in',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                        }}
                    >     
                        <Box className={styles.title}
                            sx={{
                                flexDirection: 'column',
                                p: 2,
                                gap: 1.5,
                                alignItems: 'flex-start',
                                justifyContent: 'flex-end'
                            }}>
                            <Typography level="h2" overlay sx={{ fontSize: 'md', color: '#fff'}}>
                                {place.title}
                            </Typography>
                            <Typography level="h3" overlay sx={{ fontSize: 'small', color: '#fff'}}>
                                {place.addr}    
                            </Typography>
                        </Box>
                            <IconButton size="sm" variant="solid" sx={{ 
                                color: 'neutral', 
                                bgcolor: 'rgba(255, 255, 255, 0.5)',
                                display: 'flex'
                                }}>
                                <Favorite />
                            </IconButton>
                    </CardCover> 
                </Box>        
            </Card>
        </div>
    );
};

export default PlaceItem;
