import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SurfacePro8 from "./Pages/SurfacePro8";
import Signin from "./Pages/Signin";
import Sites from "./Pages/Sites";
import TravelRoute from "./Pages/TravelRoute";
import Community from "./Pages/Community";
import Signup from "./Pages/Signup";
import Planner from './Pages/Planner';
import Plan_create from './Pages/PlanCreation';
import PlacePage from './Pages/PlacePage';
import Test from './Pages/test';
import Recommend from './Pages/RecommendPage';


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (

      <Routes>
        <Route path="/" element={<SurfacePro8 />} />
        <Route path="/login" element={<Signin/>} />
        <Route path="/sites" element={<Sites/>}/>
        <Route path="/routes" element={<TravelRoute/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path='/plan' element={<Planner/>} />
        <Route path='/create-plan' element={<Plan_create/>} />
        <Route path='/place' element={<PlacePage/>} />
        <Route path='/test' element={<Test/>} />
        <Route path='/recommend' element={<Recommend/>} />

      </Routes>
    
  );
}
export default App;
