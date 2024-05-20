import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Paper, Typography, TextField, Avatar, List, ListItem, ListItemText, ListItemAvatar, Divider, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Navbar from "../components/Navbar";

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
            await axios.put(`http://localhost:3001/user/${user.id}`, {
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

            axios.get(`http://localhost:3001/user/${id}`, { // 예시로 사용자 ID '3456699916'를 직접 입력
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



    return (
        <div>
            <Navbar />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, mt: 4 }}>
            <Avatar sx={{ width: 90, height: 90, mb: 2 }} src={user.avatarUrl} alt="Profile Picture" />
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id="file-input"
                    type="file"
                    onChange={handleFileChange}
                />
      
                    <Button onClick={updateUserInfo} variant="contained" component="span" color="primary" sx={{ mt: 2, mb: 4 }}>
                        프로필 저장
                    </Button>
             
                <Paper elevation={3} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        
                        <ListItem>  
                            <ListItemAvatar>
                                <Avatar>
                                    <EditIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="이름" secondary={user.name} sx={{ width: 'auto', flexShrink: 0, marginRight: 2 }} />
                           
                        </ListItem>

                        <Divider variant="inset" component="li" />


                        <ListItem>
                        <ListItemAvatar>
                                <Avatar>
                                    <EditIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="성별" />
                            <Button
                                onClick={() => handleGenderChange('male')}
                                sx={{ bgcolor: user.gender === 'male' ? 'lightblue' : 'grey.300', ml: 1 ,textTransform: 'none'}}
                            >
                                Male
                            </Button>
                            <Button
                                onClick={() => handleGenderChange('female')}
                                sx={{ bgcolor: user.gender === 'female' ? 'lightpink' : 'grey.300', ml: 1 ,textTransform: 'none'}}
                            >
                                Female
                            </Button>
                            <Button
                                onClick={() => handleGenderChange('nonbinary')}
                                sx={{ bgcolor: user.gender === 'nonbinary' ? 'grey' : 'grey.300', ml: 1 ,textTransform: 'none'}}
                            >
                                Non
                            </Button>
                        </ListItem>

                        <Divider variant="inset" component="li" />
                        <ListItem>
                        <ListItemAvatar>
                                <Avatar>
                                    <EditIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="나이" />
                            <TextField label="Age" variant="outlined" type="number" value={user.age} onChange={handleAgeChange} />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        
                        <ListItem>
                        <Avatar>
                            <EditIcon />
                        </Avatar>
                            <ListItemText sx={{ ml: 2 }} primary="E-Mail" secondary={user.email} />
                        </ListItem>
                    </List>
                </Paper>

            
            
            </Box>
        </div>
    );
    
}

export default UserPage;
