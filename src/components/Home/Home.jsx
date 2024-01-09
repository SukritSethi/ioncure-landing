// components/Home.js
import React from "react";
import Particle from "./Particle";
import "./Home.css";
import photo from "../../assets/whatwedo_asset.png";
import ReactPlayer from "react-player";
import AccordianElement from "./AccordianElement";
import { FaLinkedin,FaFacebookSquare,FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
          <div className="home__socials">
            <Link  to="https://www.linkedin.com/company/ioncure-tech-pvt-ltd/">
              <FaLinkedin className="home__social__icon" />
            </Link>
            <Link  to="https://www.instagram.com/ioncurerx?igsh=MTdlN25yemN4cWMzYQ==">
              <FaInstagramSquare className="home__social__icon" />
            </Link>
            <Link  to="https://twitter.com/cure_ion?lang=en">
              <FaSquareXTwitter className="home__social__icon" />
            </Link>
            <Link  to="https://www.facebook.com/profile.php?id=100057245237815&mibextid=2JQ9oc">
              <FaFacebookSquare className="home__social__icon" />
            </Link>
          </div>
        </div>
      </div>

      <hr className="first__hr" />

      <div className="about__us__quote">
        <div className="about__us__quote__quote">
          Empowering Lives, Eradicating Epilepsy. Our vision is to create a
          world where epilepsy is understood, managed, and, ultimately,
          defeated.
        </div>
      </div>

      <hr className="first__hr" />

      <div className="home__whatwedo">
        <div className="home__whatwedo_photo">
          <img src={photo} alt="" className="home__whatwedo_photo__photo" />
        </div>
        <div className="home__whatwedo_text">
          <div className="home__whatwedo_text__heading">What we do</div>
          <div className="home__whatwedo_text__content">
            Comprehensive Epilepsy Solutions: Ioncure is a multifaceted
            epilepsy-focused company involved in drug discovery, genomics, and
            diagnosis, bringing together the realms of technology, healthcare,
            and research.
            <br />
            <br />
            Holistic Approach: We address epilepsy from various angles,
            encompassing medical, social, and psychological dimensions. Our
            interventions include dietary plans, hospital collaborations,
            educational programs, and employment initiatives for individuals
            living with epilepsy.
            <br />
            <br />
            Innovative Technologies: Leveraging the power of artificial
            intelligence and data science, we drive groundbreaking research and
            advancements in epilepsy detection, prediction, and intervention.
            <br />
            <br />
            Global Collaboration: With a network of over 30 scientists in the US
            and a dozen in India, our collaborative efforts span continents,
            uniting brilliant minds to explore novel solutions to epilepsy.
            <br />
            <br />
            Community Engagement: At Ioncure, we believe in raising awareness
            and fostering understanding. Our community-driven initiatives
            involve volunteers, engineers, physicians, artists, and educators,
            collectively working towards epilepsy awareness and support.
          </div>
        </div>
      </div>
      {/* <div className="home__whatwedo">
        <div className="home__whatwedo_text">
          <div className="home__whatwedo_text__heading">What we do</div>
          <div className="home__whatwedo_text__content">
            Comprehensive Epilepsy Solutions: Ioncure is a multifaceted
            epilepsy-focused company involved in drug discovery, genomics, and
            diagnosis, bringing together the realms of technology, healthcare,
            and research.
            <br />
            <br />
            Holistic Approach: We address epilepsy from various angles,
            encompassing medical, social, and psychological dimensions. Our
            interventions include dietary plans, hospital collaborations,
            educational programs, and employment initiatives for individuals
            living with epilepsy.
            <br />
            <br />
            Innovative Technologies: Leveraging the power of artificial
            intelligence and data science, we drive groundbreaking research and
            advancements in epilepsy detection, prediction, and intervention.
            <br />
            <br />
            Global Collaboration: With a network of over 30 scientists in the US
            and a dozen in India, our collaborative efforts span continents,
            uniting brilliant minds to explore novel solutions to epilepsy.
            <br />
            <br />
            Community Engagement: At Ioncure, we believe in raising awareness
            and fostering understanding. Our community-driven initiatives
            involve volunteers, engineers, physicians, artists, and educators,
            collectively working towards epilepsy awareness and support.
          </div>
        </div>
        <div className="home__whatwedo_photo">
          <img src={photo} alt="" className="home__whatwedo_photo__photo" />
        </div>
      </div> */}
      <div className="accordian__main">
        <AccordianElement allowZeroExpanded={true} />
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
