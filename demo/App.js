import "./style.scss";

import React, { memo, useState, useEffect } from "react";
import { getStories } from "./utils";
import LoadingDotted from "../components/LoadingDotted";
import SideBar from "./SideBar";
import Content from "./Content";

import "./stories";

const getHash = () => window.location.hash.slice(2).split("/");

const App = memo(() => {
  const [hash, setHash] = useState(getHash());
  const stories = getStories();

  const handleHashChange = () => setHash(getHash());

  useEffect(() => {
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div className="App">
      <SideBar stories={stories} hash={hash} />
      <Content stories={stories} hash={hash} />
    </div>
  );
});

export default App;
