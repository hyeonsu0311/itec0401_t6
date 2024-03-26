import styles from "./MenuItemDefaults.module.css";

const MenuItemDefaults = () => {
  return (
    <div className={styles.menuItemDefaults}>
      <div className={styles.menuItemDefaultsChild} />
      <div className={styles.menuItemDefaultsItem} />
      <div className={styles.menuitemdefault}>
        <div className={styles.menuitemdefaultChild} />
        <div className={styles.guideline}>여행지 탐색</div>
      </div>
      <div className={styles.menuitemdefault1}>
        <div className={styles.menuitemdefaultItem} />
        <div className={styles.color}>여행경로 찾기</div>
      </div>
      <div className={styles.menuitemdefault2}>
        <div className={styles.menuitemdefaultInner} />
        <div className={styles.typography}>커뮤니티</div>
      </div>
    </div>)}

export default MenuItemDefaults;