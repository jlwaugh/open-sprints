import React, { useState } from 'react';
import { useHistory } from '@docusaurus/router';

//@ts-ignore 
import AboutImage from '@site/static/img/about-image.png';
//@ts-ignore 
import RoadmapImage from '@site/static/img/roadmap-image.png';
//@ts-ignore 
import GetInvolvedImage from '@site/static/img/get-involved-image.png';

import styles from './Body.module.css';
import Button from '../../Shared/Button/Button';

const JOIN_TODAY_PATH = '/join-today';
const PURPLE = '#337';
const ORANGE = '#FC9B6E';
const PINK = '#F4B4D2';
const DARK_ORANGE = '#CB7F58';

const LinkWithHover = ({ url, children }) => {
  const [hover, setHover] = React.useState(false);
  const linkStyle = {
    textDecoration: "none",
    color: hover ? DARK_ORANGE : ORANGE,
  };

  return (
    <a 
      style={linkStyle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      href={url}
    >
      {children}
    </a>
  );
};

const AboutTextContent = () => (
  <p className={styles.content__large}>
    Open Sprints by Femmecubator is a workspace for content editors, designers, and developers looking to upskill by contributing to projects within a team environment.
  </p>
);

const RoadmapTextContent = () => (
  <div>
    <div className={styles.content__medium}>Cohort Fellows - Fall 2024</div>
    <p className={styles.content__small}>
      Work with mentors in the field, while learning product development via weekly sprints. Recommended for recent grads, aspiring developers, and designers looking to contribute on short-term social good projects (4-8 weeks). Fellows are awarded a learning stipend during the program. By application only.
    </p>
    <LinkWithHover url="https://femmecubator.wordpress.com/2023/12/18/open-sprints-fellowship-program">
      <b>Learn More →</b>
    </LinkWithHover>
    <br />
    <br />
    <div className={styles.content__medium}>Project Tech Leads / Teaching Assistants - Fall 2024</div>
    <br />
    <p className={styles.content__small}>
      Mentors in the design and development industry are encouraged to meet a total of 2 hours weekly as a fellow coach for 4 weeks. Volunteers get swag and discounted tickets to community-led events such as happy hours and or weekend trainings.
    </p>
    <LinkWithHover url="https://www.opensprints.tech/join-today">
      <b>Join Us →</b>
    </LinkWithHover>
  </div>
);

const GetInvolvedTextContent = () => {
  const history = useHistory();
  
  return (
    <div>
      <div className={styles.content__large}>
        We are looking for
      </div>
      <br />
      <div className={styles.content__medium}>
        Workathon Participants (Open to BIPOC women only)
      </div>
      <br />
      <p className={styles.content__small}>
        Work with mentors in the field and learn Agile-driven product development. Recommended for recent grads and aspiring developers and designers looking to contribute on short-term projects
      </p>
      <br />
      <br />
      <div className={styles.content__medium}>
        Tech and Design Lead Mentor Residents (Open to Allies)
      </div>
      <br />
      <p className={styles.content__small}>
        Mentors in design and development industry who have an annual volunteer day are encouraged to meet a total of 2-4 hours per week to coach and give feedback to participant work.
      </p>
      <br />
      <br />
      <Button onClick={() => history.push(JOIN_TODAY_PATH)}>Apply Today</Button>
    </div>
  );
};

const TABS_CONFIG = [
  {
    name: 'About',
    Image: AboutImage,
    backgroundColor: ORANGE,
    color: PURPLE,
    Content: AboutTextContent,
  },
  {
    name: 'Roadmap',
    Image: RoadmapImage,
    backgroundColor: PURPLE,
    color: ORANGE,
    Content: RoadmapTextContent,
  },
  {
    name: 'Get Involved',
    Image: GetInvolvedImage,
    backgroundColor: PINK,
    color: PURPLE,
    Content: GetInvolvedTextContent,
  },
];

const Body = () => {
  const [selectedTab, setSelectedTab] = useState(TABS_CONFIG[0])
  const { name, Image, backgroundColor, color, Content } = selectedTab

  const tabs = TABS_CONFIG.map((tabData) => {
    const isSelectedTab = tabData.name === name
    return <button
      className={styles.tab}
      key={tabData.name}
      onClick={() => { setSelectedTab(tabData) }}
      style={{
        color,
        borderBottom: isSelectedTab ? `4px solid ${tabData.color}` : null
      }}>
      {tabData.name}
    </button>
  })

  return (<main className={styles.container} style={{ backgroundColor, color }}>
    <div className={styles.tabs}>
      {tabs}
    </div>

    <div className={styles.content}>
      <Content />
      <img src={Image} className={styles.content__image} />
    </div>
  </main>
  )
}

export default Body