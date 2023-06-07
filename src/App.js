import "./App.css";
import React, { Fragment, useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Fragment>
          <NavBar />
          <LoadingBar
            color="#f11946"
            height={3}
            progress={progress}
          />
          <Routes>
            <Route
              exact
              path="/"
              pageSize={pageSize}
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              pageSize={pageSize}
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="entertainment"
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/business"
              pageSize={pageSize}
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="business"
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/general"
              pageSize={pageSize}
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="general"
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/health"
              pageSize={pageSize}
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="health"
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              pageSize={pageSize}
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="science"
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              pageSize={pageSize}
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="sports"
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              pageSize={pageSize}
              element={
                <News
                  setProgress={setProgress}
                  apiKey={apiKey}
                  key="technology"
                  country="in"
                  category="technology"
                />
              }
            />
          </Routes>
        </Fragment>
      </Router>
    </div>
  );
};

export default App;