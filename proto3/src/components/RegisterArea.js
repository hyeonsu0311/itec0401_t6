import styles from "./RegisterArea.module.css";

const RegisterArea = () => {
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
            />
          </div>


        </div>
      </div>
      <div className={styles.alreadyRegisteredAreaWrapper}>

        <div className={styles.alreadyRegisteredArea}>
          <div className={styles.alreadyRegisteredWrapper}>
            <div className={styles.alreadyRegistered}>Already Registered?</div>
          </div>
          <button className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <b className={styles.submit}>Submit</b>
          </button>
        </div>

      </div>
    </form>
    ) 
}

export default RegisterArea;