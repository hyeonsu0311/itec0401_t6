import Navbar from "../components/Navbar";
import MenuItemDefaults from "../components/MenuItemDefaults";
import styles from "./Community.module.css";
import CommunityFrame from "../components/CommunityFrame"
import FrameComponent from "../components/FrameComponent"

const Community = () => {
  return (
    <div className={styles.surfacePro811}>
      <Navbar />
      <section className={styles.secondaryMenu}>
        <MenuItemDefaults />
        <CommunityFrame/>
        
      </section>
      <FrameComponent/>
    </div>)}

export default Community;