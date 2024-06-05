'use client'
import styles from "./RegisterArea.module.css";
import { useRouter  } from "next/navigation";
import React, { useState } from "react";

const RegisterArea = () => {


  const router = userRouter();

  const navigate = (page) => {
    router.push(page);
  }
  
  const [emailr, setEmailr] = useState("");
  const [passwordr, setPasswordr] = useState("");
  const [passwordrc, setPasswordrc] = useState("");

  const handleEmailChange = (event) => {
    setEmailr(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordr(event.target.value);
  };

  const handlePasswordConfirmChange = (event) => {
    setPasswordrc(event.target.value);
  };

  const handleRegister = () => {
   
    if(passwordr==passwordrc&&emailr!=""&&passwordr!=""&&passwordrc!=""){
    //서버에전송


    

    //

    console.log(emailr);
    console.log(passwordr);

    setEmailr("");
    setPasswordr("");
    setPasswordrc("")

    
    }
    document.location.href = '/login'
  };

  return (
    <form className={styles.registerArea}>
      <h1 className={styles.registerYourAccount}>Register account</h1>
      <div className={styles.confirmInputWrapper}>
        <div className={styles.confirmInput}>
          <div className={styles.label}>

            <div className={styles.label1}>
              <div className={styles.email}>{`Email `}</div>
            </div>

            <input
              className={styles.submitButton}
              placeholder="Please enter your email"
              type="text"
              value={emailr}
              onChange={handleEmailChange}
            />

          </div>

          <div className={styles.label2}>
            <div className={styles.passwordWrapper}>
              <div className={styles.password}>Password</div>
            </div>
            <input
              className={styles.labelChild}
              placeholder="Please enter your password"
              type="password"
              value={passwordr}
              onChange={handlePasswordChange}
            />
          </div>


          <div className={styles.label3}>
            <div className={styles.confirmPasswordWrapper}>
              <div className={styles.confirmPassword}>Confirm Password</div>
            </div>
            <input
              className={styles.labelItem}
              placeholder="Confirm your password"
              type="password"
              value={passwordrc}
              onChange={handlePasswordConfirmChange}
            />
          </div>


        </div>
      </div>
      <div className={styles.alreadyRegisteredAreaWrapper}>

        <div className={styles.alreadyRegisteredArea}>
          <div className={styles.alreadyRegisteredWrapper}>
            <div className={styles.alreadyRegistered}>Already Registered?</div>
          </div>
          <button className={styles.rectangleParent}
          onClick={handleRegister}>
            <div className={styles.frameChild} />
            <b className={styles.submit}>Submit</b>
          </button>
        </div>

      </div>
    </form>
    ) 
}

export default RegisterArea;