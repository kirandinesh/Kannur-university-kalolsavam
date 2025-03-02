import "./PreLoader.css";
import { preLoaderAnim } from "../animations/index";
import { useEffect } from "react";
const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader  w-screen h-screen">
      <div className="card">
        <div className="loader">
          <p>loading</p>
          <div className="words">
            <span className="word">music</span>
            <span className="word">dance</span>
            <span className="word">drama</span>
            <span className="word">art</span>
            <span className="word">poetry</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
