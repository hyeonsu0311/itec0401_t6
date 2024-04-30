import styles from "./SigninComponent.module.css";
import { useNavigate  } from "react-router-dom";
import React, { useState } from "react";
import { useIsLogin } from '../IsLoginContext';
import { useEffect } from "react";

import { initKakao } from 'kakao-js-sdk';
initKakao('68fe7438066563f9c4e543c48f689ae0');



const SigninComponent = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLogin, setIsLogin } = useIsLogin();



  const REST_API_KEY = '68fe7438066563f9c4e543c48f689ae0';
  const REDIRECT_URI = 'http://localhost:3000';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code&prompt=login`;
  

  

  
  


  const onButtonClickRegister = () => {
    navigate("/register");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toMain = () => {
    navigate("/");
  };
  const handleSubmit = () => { 
    window.location.href = link;
    // if(email===""||password===""){
    //    window.alert("ID , PASSWORD 를 입력해주세요")
    // }
    // else if(email===""){
    //   //db와 비교시 불일치
    // }


    // else{
    // //서버에전송


    

    // //
    // console.log(email);
    // console.log(password);

    // setEmail("");
    // setPassword("");
    // setIsLogin(true);


    // document.location.href = '/'}
    };


  return (

    <div className={styles.container}>
    <div className={styles.title}></div>
    <button className={styles.buttonToMain} onClick={toMain}>메인화면으로</button>
      <img src="/kakao.png" alt="Kakao Login" className={styles.button} onClick={handleSubmit}/>
    </div>




  );
    };
 export default SigninComponent;