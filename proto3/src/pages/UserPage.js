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

const handleGenderChange = (event) => {
    setUser({ ...user, gender: event.target.value });
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
    };

    // 닉네임 변경 핸들러
    const handleNicknameChange = (event) => {
        setUser({ ...user, nickname: event.target.value });
    };

    // 세션 스토리지에서 액세스 토큰 가져오기
    useEffect(() => {
        const accessToken = sessionStorage.getItem('accessToken');
        if (accessToken) {
            fetchUserInfo(accessToken);
        }
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
                nickname: userData.username, // 예시로 username을 nickname으로 사용
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


    const fetchUserInfo1 = (accessToken) => {
       
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
                <label htmlFor="file-input">
                    <Button variant="contained" component="span" color="primary" sx={{ mt: 2, mb: 4 }}>
                        Update Profile
                    </Button>
                </label>
                <Paper elevation={3} sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <EditIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Name" secondary={user.name} />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar>
                                    <EditIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Nickname" />
                            <TextField
                                variant="standard"
                                fullWidth
                                value={user.nickname}
                                onChange={handleNicknameChange}
                                sx={{ ml: 5 }}  // 이 항목에 대해 좌측 여백을 추가하여 정렬을 유지합니다.
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemText primary="Gender" secondary={user.gender} />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemText primary="Age" secondary={user.age} />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem>
                            <ListItemText primary="Email" secondary={user.email} />
                        </ListItem>
                    </List>
                </Paper>

            <TextField label="Name" variant="outlined" value={user.name} onChange={handleNameChange} />
            <TextField label="Age" variant="outlined" type="number" value={user.age} onChange={handleAgeChange} />
            <TextField label="Gender" variant="outlined" value={user.gender} onChange={handleGenderChange} />
            <Button onClick={updateUserInfo}>Save Changes</Button>
            </Box>
        </div>
    );
    
}

export default UserPage;
