import Navbar from "../components/Navbar";
import MenuItemDefaults from "../components/MenuItemDefaults";
import styles from "./Sites.module.css";
import FrameComponent from "../components/FrameComponent"
import RouteFrame from "../components/RouteFrame";

const TravelRoute = () => {
  return (
    <div className={styles.surfacePro811}>
      <Navbar />
      <section className={styles.secondaryMenu}>
        <MenuItemDefaults />
        <RouteFrame/>
        
      </section>
      <FrameComponent/>
    </div>)}

export default TravelRoute;