import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Box, Paper, Typography, TextField } from '@mui/material';



function UserPage() {
    const [userInfo, setUserInfo] = useState(null);

      // 여기에 사용자 데이터를 더미 데이터로 설정합니다.
     


    const [user, setUser] = useState({
        name: 'Jane Doe',
        nickname: 'Janey',
        gender: 'Female',
        age: 29,
        email: 'jane.doe@example.com'
    });

    // 닉네임 변경 핸들러
 
    const handleNicknameChange = (event) => {
        setUser({ ...user, nickname: event.target.value });
    };


    useEffect(() => {
        const accessToken = sessionStorage.getItem('accessToken'); // 세션 스토리지에서 액세스 토큰 가져오기
        if (accessToken) {
            fetchUserInfo(accessToken);
        }
    }, []);

    const fetchUserInfo = (accessToken) => {
        axios.get('https://kapi.kakao.com/v2/user/me', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            console.log(response.data);
            setUserInfo(response.data); // 전체 응답 데이터를 userInfo 상태에 저장
        }).catch(error => {
            console.error("사용자 정보 가져오기 실패:", error);
        });
    };

    return (
        <div>
            {userInfo ? (
                <div>
                    <p>사용자 정보:</p>
                    <pre>{JSON.stringify(userInfo, null, 2)}</pre> {/* JSON 데이터를 보기 좋게 출력 */}
            

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', p: 3, height: '100vh' }}>
            <Paper elevation={3} sx={{ p: 2, mb: 2, width: '100%' }}>
                <Typography variant="h4" component="h1">
                    User Information
                </Typography>
            </Paper>
            <Paper elevation={3} sx={{ p: 2, mb: 2, width: '100%' }}>
                <Typography variant="subtitle1">
                    Name: {user.name}
                </Typography>
            </Paper>
            <Paper elevation={3} sx={{ p: 2, mb: 2, width: '100%' }}>
                <TextField
                    label="Nickname"
                    variant="outlined"
                    fullWidth
                    value={user.nickname}
                    onChange={handleNicknameChange}
                />
            </Paper>
            <Paper elevation={3} sx={{ p: 2, mb: 2, width: '100%' }}>
                <Typography variant="subtitle1">
                    Gender: {user.gender}
                </Typography>
            </Paper>
            <Paper elevation={3} sx={{ p: 2, mb: 2, width: '100%' }}>
                <Typography variant="subtitle1">
                    Age: {user.age}
                </Typography>
            </Paper>
            <Paper elevation={3} sx={{ p: 2, width: '100%' }}>
                <Typography variant="subtitle1">
                    Email: {user.email}
                </Typography>
            </Paper>
        </Box>
                   
                </div>
            ) : (
                <p>사용자 정보를 불러오는 중...</p>
            )}
        </div>
    );
}

export default UserPage;
