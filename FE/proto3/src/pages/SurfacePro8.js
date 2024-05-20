import Navbar from "../components/Navbar";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./SurfacePro8.module.css";
import MainCenter1 from "../components/MainCenter1";
import MainCenter2 from "../components/MainCenter2";

const SurfacePro8 = () => {
  return (
    <div className={styles.surfacePro811}>
      <section className={styles.navbarParent}>
        <Navbar />
        <FrameComponent1 />
      </section>
      <MainCenter1/>
      <MainCenter2/>
      <FrameComponent />
    </div>
  );
};

export default SurfacePro8;
