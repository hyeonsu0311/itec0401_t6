'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Grid,
  Button,
  Typography,
  Box,
  Card,
} from '@mui/material';
import AspectRatio from '@mui/joy/AspectRatio';
import { userData } from '@/components/connect/data';
import FormCondition from '../../components/connect/condition'; // Import the FormCondition component

export default function ConnectList() {
  const [open, setOpen] = useState(false);
  const [searchCriteria, setSearchCriteria] = useState({
    minAge: '',
    maxAge: '',
    continent: '',
  });
  const router = useRouter();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const goToNewPost = () => router.push('/connect/new-post');

  const filteredData = userData.filter((post) => {
    const ageFilter = (searchCriteria.minAge === '' || post.age >= searchCriteria.minAge) && (searchCriteria.maxAge === '' || post.age <= searchCriteria.maxAge);
    const continentFilter = searchCriteria.continent === '' || post.continent === searchCriteria.continent;
    return ageFilter && continentFilter;
  });

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
        <Grid item xs={12} sx={{ width: '100%', display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button variant="contained" onClick={goToNewPost}>
            글 쓰기
          </Button>
          <Button variant="contained" onClick={handleClickOpen}>
            조건 검색
          </Button>
        </Grid>

        {/* Pass the open, setOpen, and setSearchCriteria states as props to FormCondition */}
        <FormCondition open={open} setOpen={setOpen} setSearchCriteria={setSearchCriteria} />

        <Grid container spacing={3}>
          {filteredData.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
              >
                <Box sx={{ position: 'relative' }}>
                  <AspectRatio ratio="4/3">
                    <figure>
                      <img
                        src={post.image || '/images/익명.png'}
                        loading="lazy"
                        alt={post.title}
                        style={{ borderRadius: '4px' }}
                      />
                    </figure>
                  </AspectRatio>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      p: 2,
                      gap: 1.5,
                      alignItems: 'flex-start',
                      justifyContent: 'flex-end',
                      color: 'white',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0) 100px)',
                      borderRadius: '4px',
                      position: 'absolute',
                      bottom: 0,
                      width: '100%',
                    }}
                  >
                    <Box>
                      <Typography variant="body2" sx={{ color: '#fff' }}>
                        나이 : {post.age}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#fff' }}>
                        여행지역 : {post.want}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#fff' }}>
                        여행기간 : {post.long}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}