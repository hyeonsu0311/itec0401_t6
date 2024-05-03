import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Paper, Typography, TextField, Avatar, List, ListItem, ListItemText, ListItemAvatar, Divider, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Navbar from "../components/Navbar";

function UserPage() {
    const [user, setUser] = useState({
        name: 'Jane Doe',
        nickname: 'Janey',
        gender: 'Female',
        age: 29,
        email: 'jane.doe@example.com',
        avatarUrl: 'https://via.placeholder.com/150'
    });

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
            setUser({...user, ...response.data}); // 응답 데이터를 user 상태에 저장
        }).catch(error => {
            console.error("사용자 정보 가져오기 실패:", error);
        });
    };

    return (
        <div>
            <Navbar />
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 3, mt: 4 }}>
                <Avatar sx={{ width: 90, height: 90, mb: 2 }} src={user.avatarUrl} alt="Profile Picture" />
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
                            <ListItemText primary="Nickname" secondary={
                                <TextField
                                    variant="standard"
                                    fullWidth
                                    value={user.nickname}
                                    onChange={handleNicknameChange}
                                />
                            } />
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
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                    Update Profile
                </Button>
            </Box>
        </div>
    );
}

export default UserPage;
