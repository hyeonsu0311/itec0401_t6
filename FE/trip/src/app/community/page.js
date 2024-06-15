'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Container, Grid, Button, Paper, Typography, IconButton, Stack, Pagination,Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,  } from '@mui/material';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';
import { usePosts } from '../../components/community/context/PostContext';

const OPENCAGE_API_KEY = 'c603d421c0b64d6a83c499d11bba9429'; 


export default function Community() {
  const { posts } = usePosts();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [showLocalPosts, setShowLocalPosts] = useState(false);
  const [location, setLocation] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPENCAGE_API_KEY}`)
          .then((response) => response.json())
          .then((data) => {
            const locationData = data.results[0].components;
            const city = locationData.city || locationData.town || locationData.village;
            setLocation(city || 'Unknown');
          })
          .catch(() => setLocation('Unknown'));
      },
      (error) => {
        console.error(error);
        setLocation('Unknown');
      }
    );
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const handleToggleLocalPosts = () => {
    setShowLocalPosts((prevState) => !prevState);
    setCurrentPage(1);
  };

  const filteredPosts = showLocalPosts
    ? posts.filter((post) => post.location && post.location.includes(location))
    : posts;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);

  const truncateContent = (content, length) => {
    return content.length > length ? content.substring(0, length) + '...' : content;
  };

  const router = useRouter();
  const goToNewPost = () => router.push('/community/new-post');

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
        <Grid item xs={12} sx={{ width: '100%' }}>
          <Button variant="contained" onClick={handleToggleLocalPosts}>
            {showLocalPosts ? '전체 글 보기' : '내 지역 글 보기'}
          </Button>
        </Grid>
        

        <Grid item xs={12} sx={{ width: '100%' }}>
          <TableContainer component={Paper} sx={{ minWidth: 650 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">번호</TableCell>
                  <TableCell align="center">제목</TableCell>
                  <TableCell align="center">작성자</TableCell>
                  <TableCell align="center">작성&nbsp;시간</TableCell>
                  <TableCell align="center">지역</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentItems.map((post, index) => (
                  <TableRow
                    key={post.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {indexOfFirstItem + index + 1}
                    </TableCell>
                    <TableCell align="center">
                      <Link href={`/community/posts/${post.id}`}>{post.title}</Link>
                    </TableCell>
                    <TableCell align="center">{post.author}</TableCell>
                    <TableCell align="center">{formatDistanceToNow(parseISO(post.date), { addSuffix: true, locale: ko })}</TableCell>
                    <TableCell align="center">{post.location}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Grid item xs={12} sx={{ width: '100%', minHeight: 60, maxHeight: 60 }}>
          <Paper sx={{ padding: 1, background: "#D9D9D9", borderColor: 'grey' }}>
            <Grid item xs={{ m: 1 }} onClick={goToNewPost}>
              <Typography variant="underline" align="left" color="gray">
                새 글을 작성해 주세요.
              </Typography>
              <IconButton aria-label="write">
                <ModeOutlinedIcon />
              </IconButton>
            </Grid>
          </Paper>
        </Grid>
          </TableContainer>
        </Grid>
        
        <Grid item xs={12}>
          <Stack spacing={2} alignItems="center">
            <Pagination
              count={Math.ceil(filteredPosts.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
            />
          </Stack>
        </Grid>
      </Grid>
    </Container>
    
  );
}
