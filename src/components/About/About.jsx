// components/About.js
import React from "react";
import photo1 from "../../assets/founder__photo.png";
import photo2 from "../../assets/whatwedo_asset.png";
import "./About.css";
import { GiAbstract002 } from "react-icons/gi";
import AccordianAbout from "./AccordianAbout";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <div className="about__main">
      <div className="about__main__title">About Us</div>
      <div className="about__owner__info">
        <div className="about__owner__info__left">
          <div className="about__owner__info__image">
            <img src={photo1} alt="" className="owner__image" />
          </div>
          <div className="about__owner__info__name">Dr. Sukant Khurana</div>
          <div className="about__owner__info__position">
            Chief Executive Officer, Ioncure Pvt Ltd
          </div>
        </div>
        <div className="about__owner__info__right">
          Meet <b>Dr. Sukant Khurana</b>: A Visionary Pioneer in Science, Art,
          and Entrepreneurship behind Ioncure
          <br />
          <br />
          <b>Academic Journey </b>
          <br />
          Dr. Sukant Khurana is a polymath, with a background in Neuroscience
          from The University of Texas at Austin, specializing in Artificial
          Intelligence (AI) in animal behavioral measurements at Cold Spring
          Harbor. His scholarly pursuits extended to collaborative studies in
          cell biology at Northwestern University and mathematics at New York
          University, underscoring his multidisciplinary expertise.
          <br />
          <br />
          <b>Academic and Professional Achievements</b>
          <br />
          As an academic, Dr. Khurana held esteemed positions as a professor
          before charting his entrepreneurial path with the inception of Ioncure
          Tech Pvt Ltd, a holistic epilepsy solution company. Prior to founding
          Ioncure, he spearheaded one of the most expansive citizen science
          training initiatives in data science and AI, delving into diverse
          domains like health, development, transport, tourism, finance, space
          exploration, forest fires, defense, and environmental concerns in
          India and the USA.
          <br />
          <br />
          <b>Thought Leader and Innovator</b>
          <br />
          Beyond academia, Dr. Khurana is a prolific thought leader, having
          delivered 17 TED/TEDx talks and numerous plenary lectures on varied
          subjects. His versatility extends to the realm of art, where his
          visual creations have garnered international recognition, with
          exhibitions worldwide, books published about his art, and
          documentaries featuring his artistic endeavors.
          <br />
          <br />
          <b>Entrepreneurial Ventures</b>
          <br />
          Dr. Khurana's entrepreneurial spirit shines through his involvement in
          three AI ventures, one aimed at guiding medical students, and his
          affiliation with a higher studies firm. His ventures reflect his
          commitment to utilizing technology for education and medical guidance.
          <br />
          <br />
          <b>Impactful Endeavors</b>
          <br />
          During the COVID-19 pandemic, Dr. Khurana was at the forefront,
          actively engaged in relief efforts, supplement research, and drug
          discovery. His relentless pursuit of innovative solutions spans
          various facets, evident in the recent establishment of Briarwood
          Drive, a food company catering specifically to diabetic patients.
          <br />
          <br />
          <b>Author and Creative Mind</b>
          <br />
          Besides his technical expertise, Dr. Khurana is an author, crafting
          compelling works in poetry, fiction, and photography. His literary
          contributions are complemented by a rich repertoire of technical
          writings.
          <br />
          <br />
          <b>Ecosystem Builder</b>
          <br />
          Dr. Khurana believes in fostering a holistic ecosystem for building
          startups, evident in his approach to steering Ioncure towards offering
          comprehensive solutions for epilepsy care.
          <br />
          Dr. Sukant Khurana's impactful journey traverses the intersections of
          academia, entrepreneurship, art, and humanitarian efforts, marking him
          as an influential figure in the realm of science, innovation, and
          societal welfare.
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

      <div className="about__accordian">
        <AccordianAbout />
      </div>
      <div className="about__us__timeline">
        <div className="team__heading">
          Meet the Visionary Minds at Ioncure: A Collaborative Force in Epilepsy
          Solutions
        </div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(239, 119, 120)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(239, 119, 120)" }}
            dateClassName="about__us__date"
            // date="Scientist, Historian, Poet, Polyglot, and former Creative Director at Ogilvy India"
            iconStyle={{ background: "rgb(239, 119, 120)", color: "#fff" }}
            icon={<GiAbstract002 />}
          >
            <h3 className="vertical-timeline-element-title">
              Mr. Raamesh Gowri Raghavan
            </h3>
            <p>
              Scientist, Historian, Poet, Polyglot, and former Creative Director
              at Ogilvy India. His diverse expertise and extensive experience in
              advertising lend a unique creative edge to Ioncure's approach.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(239, 119, 120)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(239, 119, 120)" }}
            dateClassName="about__us__date"
            // date="2011 - present"
            iconStyle={{ background: "rgb(239, 119, 120)", color: "#fff" }}
            icon={<GiAbstract002 />}
          >
            <h3 className="vertical-timeline-element-title">
              Mr. Ronit Bhattacharjee
            </h3>
            <p>
              Data Scientist, formerly a student of Dr. Khurana, now a
              distinguished expert in data science. His proficiency in
              harnessing data for meaningful insights drives Ioncure's
              technological innovation.{" "}
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F7F3E3", color: "#6F1A07" }}
            contentArrowStyle={{ borderRight: "7px solid  #F7F3E3" }}
            dateClassName="about__us__date"
            // date="2011 - present"
            iconStyle={{ background: "#F7F3E3", color: "#6F1A07" }}
            icon={<GiAbstract002 />}
          >
            <h3 className="vertical-timeline-element-title">
              Dr. Chetan Juneja
            </h3>
            <p>
              US-educated Computer Scientist and former CTO, brings a wealth of
              IT and AI expertise from his tenure with top American and Indian
              companies. His leadership contributes significantly to Ioncure's
              technological advancements.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#F7F3E3", color: "#6F1A07" }}
            contentArrowStyle={{ borderRight: "7px solid  #F7F3E3" }}
            dateClassName="about__us__date"
            // date="2011 - present"
            iconStyle={{ background: "#F7F3E3", color: "#6F1A07" }}
            icon={<GiAbstract002 />}
          >
            <h3 className="vertical-timeline-element-title">
              Dr. Abhijit Banerjee
            </h3>
            <p>
              Renowned in drug discovery and phytopharmacology, with a
              distinguished career spanning across the USA, Canada, and India.
              His entrepreneurial acumen and academic prowess are instrumental
              in Ioncure's pharmaceutical ventures.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#235789", color: "#FDFFFC" }}
            contentArrowStyle={{ borderRight: "7px solid  #235789" }}
            dateClassName="about__us__date"
            // date="2011 - present"
            iconStyle={{ background: "#235789", color: "#FDFFFC" }}
            icon={<GiAbstract002 />}
          >
            <h3 className="vertical-timeline-element-title">
              Ms. Natalie Boehm
            </h3>
            <p>
              President of The Defeating Epilepsy Foundation, actively involved
              in advocacy and support for epilepsy patients.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#235789", color: "#FDFFFC" }}
            contentArrowStyle={{ borderRight: "7px solid  #235789" }}
            dateClassName="about__us__date"
            // date="2011 - present"
            iconStyle={{ background: "#235789", color: "#FDFFFC" }}
            icon={<GiAbstract002 />}
          >
            <h3 className="vertical-timeline-element-title">
              Prof. Alfredo Ghezzi
            </h3>
            <p>
              Head of Biomedical Studies at The University of Puerto Rico,
              contributing to Ioncure's academic pursuits in epilepsy research.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#235789", color: "#FDFFFC" }}
            contentArrowStyle={{ borderRight: "7px solid  #235789" }}
            dateClassName="about__us__date"
            // date="2011 - present"
            iconStyle={{ background: "#235789", color: "#FDFFFC" }}
            icon={<GiAbstract002 />}
          >
            <h3 className="vertical-timeline-element-title">
              Dr. Brooks Robinson
            </h3>
            <p>
              Neuroscience Program Coordinator at the Lyda Hill Institute of
              Human Resilience, lending expertise in neurology and resilience
              studies
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#423E3B", color: "#FEA82F" }}
            contentArrowStyle={{ borderRight: "7px solid  #423E3B" }}
            dateClassName="about__us__date"
            // date="2011 - present"
            iconStyle={{ background: "#423E3B", color: "#FEA82F" }}
            icon={<GiAbstract002 />}
          >
            <h3 className="vertical-timeline-element-title">Advisors</h3>
            <p>
              Noted physicians and scientists including Dr. Ravi Nayar, Dr.
              Luisa Scott, Dr. Daniel Miller, providing valuable guidance and
              insights into epilepsy research and treatment.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>

        <div className="team__end">
          Ioncure boasts a team of talented engineers and young scientists
          hailing from top Indian and US institutes. Moreover, the company is
          supported by a robust volunteer base comprising several thousand young
          doctors and engineers
        </div>
      </div>
    </div>
  );
};

export default About;
