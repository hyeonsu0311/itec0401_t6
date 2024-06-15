import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <footer className={styles.frameParent}>
      <div className={styles.useCasesParent}>
        <div className={styles.useCases}>About us</div>
        <div className={styles.professorsStudentsParent}>
          <div className={styles.professorsStudents}>https://github.com/hyeonsu0311/itec0401_t6</div>
        </div>
      </div>
      <div className={styles.aboutParent}>
        <div className={styles.useCases}>Deploy Tools</div>
        <div className={styles.professorsStudentsParent}>
          <div className={styles.contacts}>Vercel</div>
          <div className={styles.aboutUs}>www.vercel.com</div>
          <div className={styles.faq}>Docker</div>
          <div className={styles.ourTeam}>https://www.docker.com/</div>
          
        </div>
      </div>
      
      
      <div className={styles.groupDiv}>
        
        <div className={styles.uidesigntoAll}>
          © 2024 UIDesign - All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
