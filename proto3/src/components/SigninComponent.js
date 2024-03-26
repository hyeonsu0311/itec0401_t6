import styles from "./SigninComponent.module.css";

const SigninComponent = () => {
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
            />
          </div>
          <div className={styles.passwordParent}>
            <div className={styles.password}>Password</div>
            <input
              className={styles.frameChild}
              placeholder="Please enter your password"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <button className={styles.rectangleParent}>
          <div className={styles.frameItem} />
          <b className={styles.submit}>Submit</b>
        </button>
        <div className={styles.signUpWrapper}>
          <div className={styles.signUp}>Sign up</div>
        </div>
        
      </div>
      
    </div>);
    };
    export default SigninComponent;