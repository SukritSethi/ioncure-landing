import React from "react";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

export default function AccordianElement() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Our Commitment</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Research Excellence: Ioncure stands at the forefront of pioneering
            research and development in epilepsy management, constantly
            exploring new approaches and methodologies. 
            <br />Inclusivity and
            Empowerment: We are dedicated to fostering an inclusive environment
            and empowering individuals living with epilepsy by providing
            education, employment opportunities, and support systems. 
            <br />Innovation and Progress: We constantly push boundaries and challenge norms,
            employing innovative technologies and progressive strategies to
            advance epilepsy care and solutions. 
            <br />Join us in our mission to
            transform lives, spark innovation, and pave the way towards a future
            free from the constraints of epilepsy.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Academic Journey
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
          Dr. Sukant Khurana is a polymath, with a background in Neuroscience from The University of Texas at Austin, specializing in Artificial Intelligence (AI) in animal behavioral measurements at Cold Spring Harbor. His scholarly pursuits extended to collaborative studies in cell biology at Northwestern University and mathematics at New York University, underscoring his multidisciplinary expertise.

          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
          Academic and Professional Achievements
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
          As an academic, Dr. Khurana held esteemed positions as a professor before charting his entrepreneurial path with the inception of Ioncure Tech Pvt Ltd, a holistic epilepsy solution company. Prior to founding Ioncure, he spearheaded one of the most expansive citizen science training initiatives in data science and AI, delving into diverse domains like health, development, transport, tourism, finance, space exploration, forest fires, defense, and environmental concerns in India and the USA.


          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
          Thought Leader and Innovator
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
          Beyond academia, Dr. Khurana is a prolific thought leader, having delivered 17 TED/TEDx talks and numerous plenary lectures on varied subjects. His versatility extends to the realm of art, where his visual creations have garnered international recognition, with exhibitions worldwide, books published about his art, and documentaries featuring his artistic endeavors.

          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
          Entrepreneurial Ventures
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
          Dr. Khurana's entrepreneurial spirit shines through his involvement in three AI ventures, one aimed at guiding medical students, and his affiliation with a higher studies firm. His ventures reflect his commitment to utilizing technology for education and medical guidance.

          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
          Impactful Endeavors
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
          During the COVID-19 pandemic, Dr. Khurana was at the forefront, actively engaged in relief efforts, supplement research, and drug discovery. His relentless pursuit of innovative solutions spans various facets, evident in the recent establishment of Briarwood Drive, a food company catering specifically to diabetic patients.

          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
          Author and Creative Mind
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
          Dr. Khurana's entrepreneurial spirit shines through his involvement in three AI ventures, one aimed at guiding medical students, and his affiliation with a higher studies firm. His ventures reflect his commitment to utilizing technology for education and medical guidance.

          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
