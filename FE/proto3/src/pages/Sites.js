import Navbar from "../components/Navbar";
import MenuItemDefaults from "../components/MenuItemDefaults";
import styles from "./Sites.module.css";
import SitesFrame from "../components/SitesFrame";
import FrameComponent from "../components/FrameComponent"

const Sites = () => {
  return (
    <div className={styles.surfacePro811}>
      <Navbar />
      <section className={styles.secondaryMenu}>
        <MenuItemDefaults />
        <SitesFrame />
        
      </section>
      <FrameComponent/>
    </div>)}

export default Sites;