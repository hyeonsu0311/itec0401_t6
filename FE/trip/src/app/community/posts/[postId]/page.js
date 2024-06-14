'use client';

import { useEffect, useState } from 'react';
import { useRouter,usePathname } from 'next/navigation';
import { usePosts } from '../../../../components/community/context/PostContext';
import Comments from '../../../../components/community/Comments';

import {
  Container,
  Grid,
  Paper,
  Typography,
  IconButton,
  Button,
  Box,
} from '@mui/material';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export default function PostDetailPage() {
  const { posts, setPosts } = usePosts();
  const router = useRouter();
  const pathname = usePathname()
  const match = pathname.match(/\d+$/);
  const id = match ? match[0] : null;
  
  const postIndex = posts.length-id
  const post = posts[posts.length-id]

  const [showOptions, setShowOptions] = useState(false);
  useEffect(() => {
    if (post) {
      const updatedPosts = [...posts];
      updatedPosts[postIndex] = { ...post, views: post.views + 1 };

      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      setPosts(updatedPosts);
    }
  }, [id]);
  
  if (!post) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const deletePost = () => {
    const updatedPosts = posts.filter((p) => p.id !== parseInt(id, 10));
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setPosts(updatedPosts);
    router.push('/community');
  };
  

  const editPost = () => {
    router.push({
      pathname: '/community/new-post',
      query: { post: JSON.stringify(post) },
    });
  };
  return (
    <Container maxWidth="md">
      <Typography variant="h5" component="h5" gutterBottom>
        게시글 상세
      </Typography>
      <Paper elevation={1} sx={{ p: 2, mb: 3, minHeight: '400px', height: '600px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h5">{post.title}</Typography>
              <IconButton aria-label="editDelete" onClick={toggleOptions}>
                <MoreHorizOutlinedIcon />
                {showOptions && (
                  <Box display="flex" flexDirection="column">
                    <Button variant="outlined" onClick={editPost} sx={{ mt: 1 }}>
                      수정
                    </Button>
                    <Button variant="outlined" onClick={deletePost} sx={{ mt: 1 }}>
                      삭제
                    </Button>
                  </Box>
                )}
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" color="textSecondary">
              작성자: {post.author} | {new Date(post.date).toLocaleString()} | 조회수: {post.views}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="div" dangerouslySetInnerHTML={{ __html: post.content }} />
          </Grid>
        </Grid>
      </Paper>
      <Comments postId={parseInt(post.id)} />
      
    </Container>
  );
}