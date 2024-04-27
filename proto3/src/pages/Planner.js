import Navbar from "../components/Navbar";
import MenuItemDefaults from "../components/MenuItemDefaults";
import styles from "./Planner.module.css";
import FrameComponent from "../components/FrameComponent"
import PlannerFrame from "../components/Planner/PlannerFrame";

const Planner = () => {
  return (
    <div className={styles.surfacePro811}>
      <Navbar />
      <section className={styles.secondaryMenu}>
        <PlannerFrame/>
        
      </section>
      <FrameComponent/>
    </div>)}

export default Planner;