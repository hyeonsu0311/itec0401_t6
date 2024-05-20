import Navbar from "../components/Navbar";
import styles from "./Planner.module.css";
import FrameComponent from "../components/FrameComponent"
import RecommendTemplate from "../components/Recommend/RecommendTemplate";

const Planner = () => {
  return (
    <div className={styles.surfacePro811}>
      <Navbar />
      <section className={styles.secondaryMenu}>
        <RecommendTemplate/>
        
      </section>
      <FrameComponent/>
    </div>)}

export default Planner;