import React, { useState, useEffect } from 'react';
import { TextField, Button, List, ListItem, ListItemText, Paper, Grid,Divider } from '@mui/material';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';
const COMMENTS_STORAGE_KEY = 'comments';
import axios from 'axios';

const fetchComments = (postId) => {
  const allComments = JSON.parse(localStorage.getItem(COMMENTS_STORAGE_KEY)) || {};
  return allComments[postId] || [];
};

const saveComments = (postId, comments) => {
  const allComments = JSON.parse(localStorage.getItem(COMMENTS_STORAGE_KEY)) || {};
  allComments[postId] = comments;
  localStorage.setItem(COMMENTS_STORAGE_KEY, JSON.stringify(allComments));
};

function Comments({ postId }) {
  const [user, setUser] = useState({
    id: null,
    name: '',
    nickname: 'Janey',
    gender: 'Female',
    age: 29,
    email: 'jane.doe@example.com',
    avatarUrl: 'https://via.placeholder.com/150'
});

// 입력 핸들러
const handleNameChange = (event) => {
setUser({ ...user, name: event.target.value });
};

const handleAgeChange = (event) => {
setUser({ ...user, age: event.target.value });
};

const handleGenderChange = (newGender) => {
setUser(prevUser => ({
    ...prevUser,
    gender: newGender
}));
};

// 사용자 정보를 업데이트하는 함수
const updateUserInfo = async () => {
console.log(user.id)
const accessToken = sessionStorage.getItem('accessToken');
if (accessToken) {
    try {
        await axios.put(`http://localhost:8001/service2/user/${user.id}`, {
            name: user.name,
            age: user.age,
            gender: user.gender
        }, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        alert('User information updated successfully.');
    } catch (error) {
        console.error('Failed to update user information:', error);
    }
}
};

// 파일 입력 핸들러
const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setUser({ ...user, avatarUrl: reader.result });
        };
        reader.readAsDataURL(file);
    }
}

// 세션 스토리지에서 액세스 토큰 가져오기
useEffect(() => {
    const accessToken = sessionStorage.getItem('accessToken');
    if (accessToken) {
        fetchUserInfo(accessToken);
        fetchUserProfile();
    }
}, []);

// 사용자 정보를 가져오는 함수
const fetchUserInfo = (accessToken) => {
    axios.get('https://kapi.kakao.com/v2/user/me', {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }).then(response => {
        const { id  } = response.data; 
        console.log(id);
        user.id=id

        axios.get(`http://localhost:8001/service2/user/${id}`, { 
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    }).then(response => {
        const userData = response.data; 
        setUser({
            ...user,
            name: userData.username,
            gender: userData.gender,
            age: userData.age,
            email: userData.email,
            avatarUrl: user.avatarUrl // 이미지 URL은 변경 없음
        });
    }).catch(error => {
        console.error("사용자 정보 가져오기 실패:", error);
    });

    }).catch(error => {
        console.error("사용자 정보 가져오기 실패:", error);
    });
};


const fetchUserProfile = async () => {
    const accessToken = sessionStorage.getItem('accessToken'); // 세션에서 액세스 토큰 가져오기
    if (!accessToken) return;

    try {
        const response = await axios.get('https://kapi.kakao.com/v2/user/me', {
            headers: { Authorization: `Bearer ${accessToken}` }
        });
        const profileImageUrl = response.data.properties.profile_image;
        setUser(prev => ({ ...prev, avatarUrl: profileImageUrl }));
    } catch (error) {
        console.error('Failed to fetch user profile:', error);
    }
};



  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const postComments = fetchComments(postId);
    setComments(postComments);
  }, [postId]);

  const handleAddComment = () => {
    if (newComment.trim() === '') return;

    const updatedComments = [...comments, { text: newComment, date: new Date().toISOString() }];
    setComments(updatedComments);
    saveComments(postId, updatedComments);
    setNewComment('');
  };

  return (
    <Paper elevation={1} sx={{ p: 2, mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="댓글 추가"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            multiline
            rows={2}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleAddComment}>
            댓글 달기
          </Button>
        </Grid>
      </Grid>
      <List>
        {comments.map((comment, index) => (
          
          <ListItem key={index} alignItems="flex-start">
            <Divider variant="inset" component="li" />
             <ListItemText
              primary={user.name}
            />
            <ListItemText
              primary={comment.text}
              secondary={formatDistanceToNow(parseISO(comment.date), { addSuffix: true, locale: ko })}
            />
            

          </ListItem>
        ))}
      </List>
    </Paper>
  );
}

export default Comments;