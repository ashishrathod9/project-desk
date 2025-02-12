import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import Issuedetails from './pages/Issuedetails/Issuedetails';
import Auth from './pages/Auth/Auth';
import SignupPage from './pages/Auth/Signup';
import AcceptInvitation from './pages/Acceptinvitation/Acceptinvitation';
import { store } from './Redux/Store';
import { getUser } from './Redux/Auth/Action';
import { fetchProjectById, fetchProjects } from './Redux/Project/Action';
import { PersistGate } from "redux-persist/integration/react";
function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    
    dispatch(getUser());
    dispatch(fetchProjects({}));
    
  }, [auth.jwt]);

  console.log(auth);
  // if (auth.loading==true) {
  //   // Show a loading spinner or placeholder while user data is being fetched
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <Routes>
        {localStorage.getItem('jwt') ? (
          <>
           <Route path="/acceptinvitation" element={<AcceptInvitation />} />
            <Route path="/" element={<><Navbar /><Home /></>} />
            <Route path="/project/:id" element={<><Navbar /><ProjectDetails /></>} />
            <Route path="/project/:projectId/issue/:issueId" element={<><Navbar /><Issuedetails /></>} />
           
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Auth />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/auth" replace />} />
          </>
        )}
        
      </Routes>
    </>
  );
}

export default App;
