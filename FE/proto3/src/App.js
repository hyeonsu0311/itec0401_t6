import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
<<<<<<< HEAD:FE/proto3/src/App.js
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


=======
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
<<<<<<< HEAD:FE/proto3/src/App.js
>>>>>>> parent of 9ce92de (refactor: 코드정리):proto3/src/App.js
=======
>>>>>>> parent of 9ce92de (refactor: 코드정리):proto3/src/App.js


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
<<<<<<< HEAD:FE/proto3/src/App.js
<<<<<<< HEAD:FE/proto3/src/App.js
        <Route path='/recommend' element={<Recommend/>} />
        <Route path="/user" element={<UserPage/>}/>
=======
=======
>>>>>>> parent of 9ce92de (refactor: 코드정리):proto3/src/App.js

>>>>>>> parent of 9ce92de (refactor: 코드정리):proto3/src/App.js
      </Routes>
    
  );
};
}
export default App;
