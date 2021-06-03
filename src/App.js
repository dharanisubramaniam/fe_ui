import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import HomePageSideBar from "./components/HomePage/HomePageSideBar";
import HomePageBody from "./components/HomePage/HomePageBody";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoursePage from "./components/CourseHome/CoursePage";
import Register from "./components/Register&Login/Register";
import Login from "./components/Register&Login/Login";
import axios from "axios";
import VideoPage from "./components/VideoPlayer/VideoPage";
import { useStateValue } from "./redux/StateProvider";
import ProfilePage from "./components/Profile/ProfilePage";

const apiUrl = `http://localhost:5000`;

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const courseres = await axios.get(apiUrl + "/api/course");
        const _course = courseres.data;
        // console.log(_course,"inside course");
        dispatch({ type: "SET_COURSE", course: _course });

        const categoryres = await axios.get(apiUrl + "/api/category");
        const _category = categoryres.data;
        dispatch({ type: "SET_CATEGORY", category: _category });

        const skillres = await axios.get(apiUrl + "/api/course/skill");
        const _skill = skillres.data;
        dispatch({ type: "SET_SKILL", skill: _skill });

        const overviewres = await axios.get(apiUrl + "/api/course/overview");
        const _overview = overviewres.data;
        dispatch({ type: "SET_OVERVIEW", overview: _overview });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <Router basename="/courses">
      <div className="app">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/course">
            <Header />
            <CoursePage />
          </Route>
          <Route path="/video">
            <Header />
            <VideoPage />
          </Route>
          <Route path="/profile">
            <Header />
            <ProfilePage />
          </Route>
          <Route path="/">
            <Header />
            <div className="homePage">
              <HomePageSideBar />
              <HomePageBody />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
