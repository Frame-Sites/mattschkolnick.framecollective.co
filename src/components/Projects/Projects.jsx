import React, { useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
// import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
// import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
// import ProjectImg from '../Image/ProjectImg';

const Projects = props => {
  const {
    // eslint-disable-next-line react/prop-types
    profile: {
      // eslint-disable-next-line no-unused-vars,react/prop-types
      articles,
    },
  } = props;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Articles" />
          {/* eslint-disable-next-line react/prop-types */}
          <Row key={Math.random()}>
            {/* eslint-disable-next-line react/prop-types */}
            {articles.length &&
              // eslint-disable-next-line react/prop-types
              articles.map(article => {
                const { title, caption, url } = article;
                return (
                  <Col lg={4} sm={12}>
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={500}
                      distance="30px"
                    >
                      <div className="project-wrapper__text" style={{ paddingTop: '2.5em' }}>
                        <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                        <div>
                          <p>{caption || null}</p>
                        </div>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={url || '#!'}
                        >
                          Read More
                        </a>
                      </div>
                    </Fade>
                  </Col>
                );
              })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
