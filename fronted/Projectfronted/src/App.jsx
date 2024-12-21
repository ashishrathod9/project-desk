import React, { useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Home from './pages/Home/home';
import Navbar from './pages/Navbar/Navbar';
import ProjectDetails from './pages/ProjectDetails/ProjectDetails';
import Issuedetails from './pages/Issuedetails/Issuedetails';
import Auth from './pages/Auth/Auth';
import SignupPage from './pages/Auth/Signup';
import { store } from './Redux/Store';
import { getUser } from './Redux/Auth/Action';

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getUser());
  }, [auth.jwt]);

  console.log(auth);

  return (
    <>
      <Routes>
        {auth.user ? (
          <>
            <Route path="/" element={<><Navbar /><Home /></>} />
            <Route path="/project/:id" element={<><Navbar /><ProjectDetails /></>} />
            <Route path="/project/:projectId/issue/:issueId" element={<><Navbar /><Issuedetails /></>} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        ) : (
          <>
            <Route path="/auth" element={<Auth />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="*" element={<Navigate to="/auth" replace />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;

