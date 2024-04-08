import RegisterArea from "../components/RegisterArea";
import styles from "./Signup.module.css";

const Signup = () => {
  return (
    <div className={styles.signupmain}>
      
      <div className={styles.inputField}>
        <RegisterArea />
      </div>
    </div>
  )
}

export default Signup;