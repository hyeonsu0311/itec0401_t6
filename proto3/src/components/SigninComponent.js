import styles from "./SigninComponent.module.css";
import { useNavigate  } from "react-router-dom";
import React, { useState } from "react";
import { useIsLogin } from '../IsLoginContext'
import { useEffect } from 'react';




const SigninComponent = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isLogin,setIsLogin} = useIsLogin()


  const REST_API_KEY = '68fe7438066563f9c4e543c48f689ae0';
  const REDIRECT_URI = 'http://localhost:3000';
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  

  const onButtonClickRegister = () => {
    navigate("/register");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
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
    <div className={styles.frameParent}>
      <div className={styles.signInWrapper}>
        <h1 className={styles.signIn}>Sign in</h1>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          
          <div className={styles.emailParent}>
            <div className={styles.email}>{`Email `}</div>
            <input
              className={styles.submitButton}
              placeholder="Please enter your email"
              type="text"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className={styles.passwordParent}>
            <div className={styles.password}>Password</div>
            <input
              className={styles.frameChild}
              placeholder="Please enter your password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <button className={styles.rectangleParent}
         onClick={handleSubmit}>
          <div className={styles.frameItem} />
          <b className={styles.submit}>Submit</b>
        </button>
        <div className={styles.signUpWrapper}>
          <div className={styles.signUp}
          onClick={onButtonClickRegister}>Sign up</div>
        </div>
        
      </div>
      
    </div>);
    };
    export default SigninComponent;