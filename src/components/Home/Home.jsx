// components/Home.js
import React from 'react';
import Particle from './Particle';
import "./Home.css"

const Home = () => {
  return (
    <div className='home__wrapper' >
      <Particle></Particle>
      <div className="home__hero">
        <div className="home__hero__content">
        <p>USING</p>
        <p className='home__hero__content__bold'>DATA SCIENCE</p>
        <p>TO COMBAT</p>
        <p className='home__hero__content__bold'>EPILEPSY</p></div>
      </div>
      <div className="home__whatwedo">
        <div className="home__whatwedo_text">
          <div className="home__whatwedo_text__heading">What we do</div>
          <div className="home__whatwedo_text__content">Data science is revolutionizing epilepsy treatment by predicting optimal medications. Leveraging patient records and genetic data, machine learning models analyze patterns to forecast personalized medication responses. This approach minimizes the trial-and-error method, providing more precise and efficient treatment plans. The synergy of data science and healthcare marks a paradigm shift, promising improved outcomes for epilepsy patients through targeted, data-driven interventions.</div>
        </div>
        <div className="home__whatwedo_photo"><img src="" alt="" /></div>
      </div>
      fb
    </div>
  );
};

export default Home;
