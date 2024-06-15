'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button, TextField, Grid, Container } from '@mui/material';
import axios from 'axios';


const OPENCAGE_API_KEY = 'c603d421c0b64d6a83c499d11bba9429';

function NewPostComponent({ posts, setPosts, post: initialPost }) {
    const router = useRouter();
    const [title, setTitle] = useState(initialPost?.title || '');
    const [author, setAuthor] = useState(initialPost?.author || '');
    const [content, setContent] = useState(initialPost?.content || '');
    const [location, setLocation] = useState('');
   //=============================
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


   //=============================
    useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPENCAGE_API_KEY}`)
          .then((response) => response.json())
          .then((data) => {
            const locationData = data.results[0].components;
            setLocation(`${locationData.city}`);
          })
          .catch(() => setLocation('Location not found'));
      });
    }, []);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const postsArray = JSON.parse(localStorage.getItem('posts') || '[]');
      if (initialPost) {
        const updatedPosts = postsArray.map((p) =>
          p.id === initialPost.id
            ? { ...p, title, author, content, date: new Date().toISOString(), location }
            : p
        );
        localStorage.setItem('posts', JSON.stringify(updatedPosts));
        setPosts(updatedPosts);
      } else {
        const newId = postsArray.length > 0 ? (postsArray.length + 1 ): 1;

        const newPost = {
          id: newId, // Correctly use newId
          title,
          author : user.name,
          content,
          date: new Date().toISOString(),
          location,
          views: 0,
        };
        const newPosts = [newPost, ...postsArray];
        localStorage.setItem('posts', JSON.stringify(newPosts));
        setPosts(newPosts);
      }
      router.push('/community');
    };

  
    return (
      <Container component="CommunityForm" maxWidth="md">
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                autoFocus
                fullWidth
                value={user.name}
                // onChange={(e) => setAuthor(e.target.value)}
                disabled
                id="author"
                name="author"
                label="작성자"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="title"
                id="title"
                name="title"
                label="제목을 입력해주세요"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <CKEditor
                editor={ClassicEditor}
                data={content}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setContent(data);
                }}
                config={{
                  height: '400px',
                }}
                onReady={(editor) => {
                  editor.editing.view.change((writer) => {
                    writer.setStyle('height', '400px', editor.editing.view.document.getRoot());
                  });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <TextField
                required
                fullWidth
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                type="location"
                id="location"
                name="location"
                label="제목을 입력해주세요"
                size="small"
              /> */}
              <TextField
                fullWidth
                value={location}
                disabled
                id="location"
                name="location"
                label="Current Location"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={() => router.push('/community')}
                type="button"
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="small"
              >
                취소
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, ml: 2 }}
                size="small"
              >
                등록
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
  
  export default NewPostComponent;