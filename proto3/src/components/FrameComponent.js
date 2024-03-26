import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <footer className={styles.frameParent}>
      <div className={styles.useCasesParent}>
        <div className={styles.useCases}>Use Cases</div>
        <div className={styles.professorsStudentsParent}>
          <div className={styles.professorsStudents}>Professors / Students</div>
          <div className={styles.libraries}>Libraries</div>
          <div className={styles.bookstores}>Bookstores</div>
          <div className={styles.publishers}>Publishers</div>
        </div>
      </div>
      <div className={styles.aboutParent}>
        <div className={styles.useCases}>About</div>
        <div className={styles.professorsStudentsParent}>
          <div className={styles.contacts}>Contacts</div>
          <div className={styles.aboutUs}>About us</div>
          <div className={styles.faq}>FAQ</div>
          <div className={styles.ourTeam}>Our Team</div>
          <div className={styles.termsOfService}>Terms of service</div>
        </div>
      </div>
      <div className={styles.productParent}>
        <div className={styles.useCases}>Product</div>
        <div className={styles.professorsStudentsParent}>
          <div className={styles.termsOfUse}>Terms of use</div>
          <div className={styles.privacyPolicy}>Privacy policy</div>
          <div className={styles.logIn}>Log in</div>
        </div>
      </div>
      <div className={styles.downloadAppParent}>
        <div className={styles.useCases}>Download App</div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.googlePlayWrapper}>
                <div className={styles.googlePlay}>Google Play</div>
              </div>
              <img
                className={styles.subtractIcon}
                loading="lazy"
                alt=""
                src="/subtract.svg"
              />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.googlePlayWrapper}>
                <div className={styles.appleStore}>Apple Store</div>
              </div>
              <img
                className={styles.subtractIcon}
                loading="lazy"
                alt=""
                src="/apple-logo.svg"
              />
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.unionParent}>
                <input className={styles.union} type="checkbox" />
                <div className={styles.desktop}>Desktop</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-1533.svg"
        />
        <div className={styles.uidesigntoAll}>
          © 2022 UIDesign.to - All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
