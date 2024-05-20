import Navbar from "../components/Navbar";
import MenuItemDefaults from "../components/MenuItemDefaults";
import styles from "./Planner.module.css";
import FrameComponent from "../components/FrameComponent"
import PlaceFrame from "../components/Place/PlaceTemplate";

const Planner = () => {
  return (
    <div className={styles.surfacePro811}>
      <Navbar />
      <section className={styles.secondaryMenu}>
        <PlaceFrame/>
        
      </section>
      <FrameComponent/>
    </div>)}

export default Planner;