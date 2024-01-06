// components/Home.js
import React from "react";
import Particle from "./Particle";
import "./Home.css";
import photo from "../../assets/whatwedo_asset.png";
import ReactPlayer from "react-player";

const Home = () => {
  return (
    <div className="home__wrapper">
      <Particle></Particle>
      <div className="home__hero">
        <div className="home__hero__content">
          <p className="home__hero__content__text">USING</p>
          <p className="home__hero__content__text__bold">DATA SCIENCE</p>
          <p className="home__hero__content__text">TO COMBAT</p>
          <p className="home__hero__content__text__bold">EPILEPSY</p>
        </div>
      </div>

      
      <div className="home__whatwedo">
        <div className="home__whatwedo_text">
          <div className="home__whatwedo_text__heading">What we do</div>
          <div className="home__whatwedo_text__content">
            Data science is revolutionizing epilepsy treatment by predicting
            optimal medications. Leveraging patient records and genetic data,
            machine learning models analyze patterns to forecast personalized
            medication responses. This approach minimizes the trial-and-error
            method, providing more precise and efficient treatment plans. The
            synergy of data science and healthcare marks a paradigm shift,
            promising improved outcomes for epilepsy patients through targeted,
            data-driven interventions.
          </div>
        </div>
        <div className="home__whatwedo_photo">
          <img src={photo} alt="" />
        </div>
      </div>

      <div className="latest__youtubevideo">
        <div className="latest_youtubevideo__heading">Our Documentaries</div>
        <div className="latest__youtubevideo_video">
          <ReactPlayer url="https://www.youtube.com/watch?v=LXb3EKWsInQ" />
        </div>
      </div>
    </div>
  );
};

export default Home;
