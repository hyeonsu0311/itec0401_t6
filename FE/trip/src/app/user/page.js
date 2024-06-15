'use client'

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { Box, Paper, Typography, TextField, Avatar, List, ListItem, ListItemText, ListItemAvatar, Divider, Button, IconButton, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PlaceItem from '@/components/place/PlaceItem';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function UserPage() {
    const [user, setUser] = useState({
        id: null,
        name: 'Jane Doe',
        nickname: 'Janey',
        gender: 'Female',
        age: 29,
        email: 'jane.doe@example.com',
        avatarUrl: 'https://via.placeholder.com/150'
    });
    const [likedPlaces, setLikedPlaces] = useState([]);
    const [isEditingName, setIsEditingName] = useState(false);
    const scrollRef = useRef(null);

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
        loadLikedPlaces();
    }, []);

    // 사용자 정보를 가져오는 함수
    const fetchUserInfo = (accessToken) => {
        axios.get('https://kapi.kakao.com/v2/user/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            const { id } = response.data;
            console.log(id);
            user.id = id

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

    const loadLikedPlaces = () => {
        const storedLikes = JSON.parse(localStorage.getItem('likedPlaces')) || [];
        setLikedPlaces(storedLikes);
    };

    const scrollLeft = () => {
        scrollRef.current.scrollBy({
            left: -300, // Adjust this value to control the scroll amount
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({
            left: 300, // Adjust this value to control the scroll amount
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, mt: 4 }}>
                <Avatar sx={{ width: 120, height: 120, mb: 2 }} src={user.avatarUrl} alt="Profile Picture" />
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="file-input"
                    type="file"
                    onChange={handleFileChange}
                />
                <Button
                    onClick={updateUserInfo}
                    variant="contained"
                    component="span"
                    color="primary"
                    sx={{ mt: 2, mb: 4, fontSize: '1rem', padding: '10px 20px' }}
                >
                    프로필 저장
                </Button>

                <Paper elevation={3} sx={{ width: '100%', maxWidth: 1200, bgcolor: 'background.paper', p: 2 }}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <ListItem>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <Avatar>
                                        <EditIcon />
                                    </Avatar>
                                </Grid>
                                <ListItemText sx={{ ml: 2 }} primary="이름" />

                                <Grid item xs>
                                    {isEditingName ? (
                                        <TextField
                                            label="이름"
                                            variant="outlined"
                                            value={user.name}
                                            onChange={handleNameChange}
                                            onBlur={() => setIsEditingName(false)}
                                            autoFocus
                                            fullWidth
                                            sx={{ ml: 2 }}
                                        />
                                    ) : (
                                        <Typography
                                            variant="body1"
                                            onClick={() => setIsEditingName(true)}
                                            sx={{ ml: 2, cursor: 'pointer' }}
                                        >
                                            {user.name}
                                        </Typography>
                                    )}
                                </Grid>
                            </Grid>
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <Avatar>
                                        <EditIcon />
                                    </Avatar>
                                </Grid>
                                <ListItemText sx={{ ml: 2 }} primary="성별" />
                                <Grid item xs>
                                
                                    <Button
                                        onClick={() => handleGenderChange('male')}
                                        sx={{ bgcolor: user.gender === 'male' ? 'lightblue' : 'grey.300', ml: 1, textTransform: 'none', fontSize: '1rem' }}
                                    >
                                        남자
                                    </Button>
                                    <Button
                                        onClick={() => handleGenderChange('female')}
                                        sx={{ bgcolor: user.gender === 'female' ? 'lightpink' : 'grey.300', ml: 1, textTransform: 'none', fontSize: '1rem' }}
                                    >
                                        여자
                                    </Button>
                                    <Button
                                        onClick={() => handleGenderChange('nonbinary')}
                                        sx={{ bgcolor: user.gender === 'nonbinary' ? 'grey' : 'grey.300', ml: 1, textTransform: 'none', fontSize: '1rem' }}
                                    >
                                        그 외
                                    </Button>
                                </Grid>
                            </Grid>
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <Avatar>
                                        <EditIcon />
                                    </Avatar>
                                </Grid>
                                <ListItemText sx={{ ml: 2 }} primary="나이" />
                                <Grid item xs>
                                    <TextField
                                        label="나이"
                                        variant="outlined"
                                        type="number"
                                        value={user.age}
                                        onChange={handleAgeChange}
                                        sx={{ ml: 2, width: '300px' }}
                                    />
                                </Grid>
                            </Grid>
                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem>
                            <Avatar>
                                <EditIcon />
                            </Avatar>
                            <ListItemText sx={{ ml: 2 }} primary="E-Mail" />
                            <ListItemText sx={{ ml: 2 }} primary={user.email}  />

                        </ListItem>
                        <Divider variant="inset" component="li" />

                        <ListItem>
                            <Avatar>
                                <EditIcon />
                            </Avatar>
                            <ListItemText sx={{ ml: 2 }} primary="좋아요" />
                        </ListItem>
                    </List>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton onClick={scrollLeft}>
                            <ArrowBackIosIcon />
                        </IconButton>
                        <Box
                            ref={scrollRef}
                            sx={{
                                display: 'flex',
                                overflowX: 'scroll',
                                '&::-webkit-scrollbar': { display: 'none' },
                                '-ms-overflow-style': 'none',
                                scrollbarWidth: 'none',
                                width: '100%',
                                maxWidth: 1000,
                            }}
                        >
                            {likedPlaces.length > 0 ? (
                                likedPlaces.map((place, index) => (
                                    <Box key={index} sx={{ minWidth: 300, marginRight: 2 }}>
                                        <PlaceItem key={place.id} place={place} />
                                    </Box>
                                ))
                            ) : (
                                <Typography variant="body1" sx={{ m: 2 }}>No liked places</Typography>
                            )}
                        </Box>
                        <IconButton onClick={scrollRight}>
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </Box>
                </Paper>
            </Box>
        </div>
    );
}

export default UserPage;

