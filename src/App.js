import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import MainBody from "./components/MainBody";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CourseHome from "./components/CourseHome";
import axios from "axios";

function App() {
  const [path, setPath] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/video");
      setPath(response.data[0].video);
      console.log(` this is request : ${ response.data[0].Description }`);
      return response.data[0];
    }
    
    fetchData();
    
  }, []);
 
  console.log(`path: ${path}`);
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
