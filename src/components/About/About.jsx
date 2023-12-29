// components/About.js
import React from "react";
import photo1 from "../../assets/founder__photo.png";
import photo2 from "../../assets/whatwedo_asset.png";
import "./About.css";
import { GiAbstract002 } from "react-icons/gi";



import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <div className="about__main">
      <div className="about__owner__info">
        <div className="about__owner__info__left">
          <div className="about__owner__info__image">
            <img src={photo1} alt="" className="owner__image" />
          </div>
          <div className="about__owner__info__name">Dr. Sukant Khurana</div>
          <div className="about__owner__info__position">
            Chief Executive Officer Ioncure Pvt Ltd
          </div>
        </div>
        <div className="about__owner__info__right">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab voluptates
          culpa itaque in accusantium pariatur molestias, blanditiis voluptas
          cumque vero autem consequuntur aspernatur voluptate explicabo
          exercitationem nesciunt est atque fugiat nisi sit at veniam porro
          aperiam. Error eius perferendis aspernatur impedit possimus hic
          voluptatum, doloribus cupiditate praesentium alias quo nisi.
        </div>
      </div>

      <hr className="first__hr" />

      <div className="about__us__quote">
        <div className="about__us__quote__quote">
          “The irony of reducing waste and improving the health of the
          employer-sponsored population -- for over 100 million Americans -- is
          that it's not a health problem, but rather a marketing and IT
          problem.”
        </div>
        <div className="about__us__quote__author">
          <em>- Josh Stevens</em>
        </div>
      </div>

      <hr className="first__hr" />

      <div className="about__us__timeline">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(239, 119, 120)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(239, 119, 120)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(239, 119, 120)", color: "#fff" }}
            icon={<GiAbstract002 />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(239, 119, 120)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(239, 119, 120)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(239, 119, 120)", color: "#fff" }}
            icon={<GiAbstract002 />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(239, 119, 120)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(239, 119, 120)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(239, 119, 120)", color: "#fff" }}
            icon={<GiAbstract002 />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(239, 119, 120)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(239, 119, 120)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(239, 119, 120)", color: "#fff" }}
            icon={<GiAbstract002 />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>

          
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default About;
