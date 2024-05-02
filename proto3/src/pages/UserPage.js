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
                </div>
            ) : (
                <p>사용자 정보를 불러오는 중...</p>
            )}
        </div>
    );
}

export default UserPage;
