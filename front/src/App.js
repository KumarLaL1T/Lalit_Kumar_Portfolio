import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './component/Home/Home/Home.js';
import Header from './component/Home/Header/Header.js';
import Footer from './component/Footer/Footer.jsx';
import About from './component/About/About.jsx';
import Projects from './component/Projects/Projects.jsx'
import Contact from './component/Contact/Contact.jsx';
import Login from "./component/Login/Login";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loadUser } from "./action/user.js";
import AdminPanel from "./component/Admin/AdminPanel.jsx";
import TimeLine from "./component/Home/Timeline/Timeline.jsx";
import Youtube from "./component/Admin/Youtube.jsx";
import Project from "./component/Admin/Project";
import Loader from "./component/Loader/Loader.jsx";

function App() {
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => state.login);
  const { loading, user } = useSelector((state) => state.user);


  useEffect(() => {
    dispatch(getUser());
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home
              youtubes={user.youtube}
              timelines={user.timeline}
              skills={user.skills}
            />} />
            <Route path="/about" element={<About about={user.about} />} />
            <Route path="/projects" element={<Projects projects={user.projects} />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/account" element={isAuthenticated ? <AdminPanel /> : <Login />} />
            <Route path="/admin/timeline" element={isAuthenticated ? <TimeLine /> : <Login />} />
            <Route path="/admin/youtube" element={isAuthenticated ? <Youtube /> : <Login />} />
            <Route path="/admin/project" element={isAuthenticated ? <Project /> : <Login />} />
          </Routes>
          <Footer />
        </>
      )}

    </Router>
  )
}

export default App
