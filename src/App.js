import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainBody from "./components/MainBody";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CourseHome from "./components/CourseHome";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/video">
            <CourseHome />
          </Route>
          <Route path="/">
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
