import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
// import SurfacePro8 from "./pages/SurfacePro8";
// import Signin from "./pages/Signin"
// import Sites from "./pages/Sites"
// import TravelRoute from "./pages/TravelRoute";
import Community from "./pages/Community";
import CommunityForm from './pages/CommunityForm';
import CommunityDetail from './pages/CommunityDetail';
import Signup from "./pages/Signup";
import Planner from './pages/Planner';
import Plan_create from './pages/PlanCreation'
import PlaceContainer from './pages/PlaceContainer';


function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const [posts, setPosts] = useState([]);


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
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(storedPosts.map(post => ({
      ...post,
      views: post.views || 0, 
      createdAt: new Date(post.createdAt)
    })));
  }, []);

  return (
      <Routes>
        {/* <Route path="/" element={<SurfacePro8 />} />
        <Route path="/login" element={<Signin/>} />
        <Route path="/sites" element={<Sites/>}/>
        <Route path="/routes" element={<TravelRoute/>}/> */}
        <Route path="/register" element={<Signup/>}/>
        <Route path='/plan' element={<Planner/>} />
        <Route path='/create-plan' element={<Plan_create/>} />
        <Route path='/place' element={<PlaceContainer/>} />
        <Route path="/community/" element={<Community posts={posts} />} />
        <Route path="/community/new-post" element={<CommunityFormWrapper posts={posts} setPosts={setPosts} />} />
        <Route path="/community/posts/:postId" element={<CommunityDetail posts={posts} setPosts={setPosts} />} />
      </Routes>
  );
}
function CommunityFormWrapper({ posts, setPosts }) {
  const location = useLocation();
  const post = location.state?.post;  
  return <CommunityForm posts={posts} setPosts={setPosts} post={post} />;
}


export default App;
