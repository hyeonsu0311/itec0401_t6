import axios from 'axios';
import React, { useEffect, useState } from 'react';

function UserPage() {
    const [userInfo, setUserInfo] = useState(null);

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
            setUserInfo({
                name: response.data.properties.nickname,
                email: response.data.kakao_account.email
            });
        }).catch(error => {
            console.error("사용자 정보 가져오기 실패:", error);
        });
    };

    return (
        <div>
            {userInfo ? (
                <div>
                    <p>이름: {userInfo.name}</p>
                    <p>이메일: {userInfo.email}</p>
                </div>
            ) : (
                <p>사용자 정보를 불러오는 중...</p>
            )}
        </div>
    );
}

export default UserPage;
