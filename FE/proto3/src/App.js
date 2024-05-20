import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SurfacePro8 from "./pages/SurfacePro8";
import Signin from "./pages/Signin"
import Sites from "./pages/Sites"
import TravelRoute from "./pages/TravelRoute";
import Community from "./pages/Community";
import Signup from "./pages/Signup";
import Planner from './pages/Planner';
import Plan_create from './pages/PlanCreation'
import PlaceContainer from './pages/PlaceContainer';
import UserPage from "./pages/UserPage";
import { initKakao } from 'kakao-js-sdk';




function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  initKakao(process.env.REACT_APP_KAKAO_APP_KEY);
 


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

const App = () => {
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
        <Route path="/user" element={<UserPage/>}/>
      </Routes>
    
  );
};
}
export default App;
