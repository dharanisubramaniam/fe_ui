import "./App.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainBody from "./components/MainBody";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CourseHome from "./components/CourseHome";
import Register from "./components/Register";
import Login from "./components/Login";
import axios from "axios";
import Video from "./components/Video";
import {useStateValue} from "./redux/StateProvider";
import Profile from "./components/Profile";
import { useSelector, useDispatch } from "react-redux";

function App() {

  const [{},dispatch] = useStateValue();
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/course"); 
        const _course = response.data
        dispatch({type:"SET_COURSE",course:_course})
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [dispatch]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/category");
        console.log(response.data);
        const _category = response.data
        dispatch({type:"SET_CATEGORY",category:_category})
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [dispatch]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get( "/api/skill");
        const _skill = response.data
        dispatch({type:"SET_SKILL",skill:_skill})
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [dispatch]);
  // console.log("skill",skill);
  // console.log("appcategory",category);

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
            <CourseHome />
          </Route>
          <Route path="/video" >
          <Header />
          <Video />
        </Route>
        <Route path="/profile" >
          <Header />
          <Profile />
        </Route>
          <Route path="/">
            <Header />
            <div className="body">
              <SideBar />
              <MainBody />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
