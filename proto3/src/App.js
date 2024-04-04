import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Destination from './pages/Destination';
import Planner from './pages/Planner';
import Plan_create from './pages/PlanCreation'
import PlaceContainer from './pages/PlaceContainer';
import test from './pages/test'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/dest' element={<Destination/>} />
        <Route path='/plan' element={<Planner/>} />
        <Route path='/create-plan' element={<Plan_create/>} />
        <Route path='/place' element={<PlaceContainer/>} />
        {/* <Route path='/test' element={<Plan_create/>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
