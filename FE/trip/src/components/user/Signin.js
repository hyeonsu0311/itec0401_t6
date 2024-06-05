import SigninComponent from "@/components/user/SigninComponent";
import styles from "./Signin.module.css";

const Frame = () => {
  return (
    <div className={styles.frameParent }
     >
      <div className={styles.frameWrapper}>
        <SigninComponent/>
      </div>
      
    </div>
  );
};

export default Frame;