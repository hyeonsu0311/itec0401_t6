'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ItemContainer from '@/components/recommend/ItemContainer';
import styles from './RecommendTemplate.module.css';

const places = [
    { addr: "대구광역시 수성구 무학로 78", image: "/images/감영공원.jpg" },
    { addr: "대구광역시 수성구 무학로 78", image: "/images/송해공원.jpg" },
    { addr: "대구광역시 수성구 무학로 78", image: "/images/아양교.png" },
    { addr: "대구광역시 수성구 무학로 78", image: "/images/앞산.jpg" },
    { addr: "대구광역시 수성구 무학로 78", image: "/images/수성못.png" },
    { addr: "대구광역시 수성구 무학로 78", image: "/images/대구수목원.png" },
    { addr: "대구광역시 수성구 무학로 78", image: "/images/라이온즈파크.jpg" },
    { addr: "대구광역시 수성구 무학로 78", image: "/images/아쿠아리움.jpg" },
    { addr: "대구광역시 수성구 무학로 78", image: "/images/이월드.jpg" },
    { addr: "대구광역시 수성구 무학로 78", image: "/images/팔공산.png" },
    { addr: "대구광역시 수성구 무학로 78", image: "/images/근대역사.png" },
    { addr: "대구광역시 수성구 무학로 78", image: "/images/동화사.png" },
    { addr: "대구광역시 수성구 무학로 78", image: "/images/스파크랜드.png" }
];

const RecommendTemplate = () => {
    return (
        <Box sx={{ padding: 2 }}>
            <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    맞춤 여행지
                </Typography>
                <Box sx={{ borderBottom: '2px solid #000', marginBottom: 2 }} />
            </Box>
            <Grid container spacing={2}>
                <ItemContainer places={places.slice(0, 6)} />
            </Grid>

            <Box sx={{ textAlign: 'center', marginTop: 4, marginBottom: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    인기 여행지
                </Typography>
                <Box sx={{ borderBottom: '2px solid #000', marginBottom: 2 }} />
            </Box>
            <Grid container spacing={2}>
                <ItemContainer places={places.slice(4, 10)} />
            </Grid>

            <Box sx={{ textAlign: 'center', marginTop: 4, marginBottom: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom>
                    조회수
                </Typography>
                <Box sx={{ borderBottom: '2px solid #000', marginBottom: 2 }} />
            </Box>
            <Grid container spacing={2}>
                <ItemContainer places={places.slice(1, 4).concat(places.slice(8, 12))} />
            </Grid>
        </Box>
    );
};

export default RecommendTemplate;
