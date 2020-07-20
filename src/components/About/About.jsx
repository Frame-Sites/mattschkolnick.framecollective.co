import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
// import AboutImg from '../Image/AboutImg';
import getCDNUrl from '../../utils/cdn';

const About = props => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const {
    // eslint-disable-next-line camelcase,react/prop-types
    profile: { assets, skills, coursework, experience, education, leadership },
  } = props;

  // eslint-disable-next-line react/prop-types
  const [imageObj] = assets.filter(asset => asset.type === 'primary');
  const imageUrl = getCDNUrl(imageObj.url, 'primary');
  // eslint-disable-next-line react/prop-types
  const [resumeObj] = assets.filter(asset => asset.type === 'resume');
  const resumeUrl = getCDNUrl(resumeObj.url, 'resume');

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
    <section id="about">
      <Container>
        <Title title="Skills & Experience" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <img src={imageUrl} alt="" height="500px" />
                {/* <AboutImg alt="profile picture" filename={imageUrl} /> */}
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <Row className="about-wrapper">
                  <Col md={12} sm={12}>
                    {/* eslint-disable-next-line react/prop-types */}
                    {experience.length ? (
                      <h2 className="about-wrapper__info-text">
                        <strong>Professional</strong>
                      </h2>
                    ) : null}
                    {/* eslint-disable-next-line react/prop-types */}
                    {experience.length ? (
                      <ul>
                        {/* eslint-disable-next-line react/prop-types */}
                        {experience.map(exp => {
                          return (
                            <li className="about-wrapper__info-text" key={Math.random()}>
                              {exp.position}, {exp.company} ({exp.start_date} - {exp.end_date})
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                    <br />
                    {/* eslint-disable-next-line react/prop-types */}
                    {leadership.length ? (
                      <h2 className="about-wrapper__info-text">
                        <strong>Leadership</strong>
                      </h2>
                    ) : null}
                    {/* eslint-disable-next-line react/prop-types */}
                    {leadership.length ? (
                      <ul>
                        {/* eslint-disable-next-line react/prop-types */}
                        {leadership.map(lead => {
                          return (
                            <li className="about-wrapper__info-text" key={Math.random()}>
                              {lead.position}, {lead.organization} ({lead.start_date} -{' '}
                              {lead.end_date})
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                    <br />
                    {/* eslint-disable-next-line react/prop-types */}
                    {education.length ? (
                      <h2 className="about-wrapper__info-text">
                        <strong>Education</strong>
                      </h2>
                    ) : null}
                    {/* eslint-disable-next-line react/prop-types */}
                    {education.length ? (
                      <ul>
                        {/* eslint-disable-next-line react/prop-types */}
                        {education.map(ed => {
                          if (ed.majorTwo && ed.minorOne && ed.minorTwo && ed.university) {
                            return (
                              <li className="about-wrapper__info-text" key={Math.random()}>
                                - {ed.degreeSubtype} in {ed.majorOne} & {ed.majorTwo} with minors in{' '}
                                {ed.minorOne} & {ed.minorTwo} from {ed.university}
                              </li>
                            );
                          }
                          if (ed.majorTwo && ed.minorOne && ed.minorTwo) {
                            return (
                              <li className="about-wrapper__info-text" key={Math.random()}>
                                - {ed.degreeSubtype} in {ed.majorOne} & {ed.majorTwo} with minors in{' '}
                                {ed.minorOne} & {ed.minorTwo}
                              </li>
                            );
                          }
                          if (ed.majorTwo && ed.minorOne && ed.university) {
                            return (
                              <li className="about-wrapper__info-text" key={Math.random()}>
                                {ed.degreeSubtype} in {ed.majorOne} & {ed.majorTwo} with a minor in{' '}
                                {ed.minorOne} from {ed.university}
                              </li>
                            );
                          }
                          if (ed.majorTwo && ed.minorOne) {
                            return (
                              <li className="about-wrapper__info-text" key={Math.random()}>
                                {ed.degreeSubtype} in {ed.majorOne} & {ed.majorTwo} with a minor in{' '}
                                {ed.minorOne}
                              </li>
                            );
                          }
                          if (ed.majorTwo && ed.university) {
                            return (
                              <li className="about-wrapper__info-text" key={Math.random()}>
                                {ed.degreeSubtype} in {ed.majorOne} & {ed.majorTwo} from{' '}
                                {ed.university}
                              </li>
                            );
                          }
                          if (ed.university) {
                            return (
                              <li className="about-wrapper__info-text" key={Math.random()}>
                                {ed.degreeSubtype} in {ed.majorOne} from {ed.university}
                              </li>
                            );
                          }
                          return (
                            <li className="about-wrapper__info-text" key={Math.random()}>
                              {ed.degreeSubtype} in {ed.majorOne}
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </Col>
                  {/* eslint-disable-next-line react/prop-types */}
                  {skills.length ? (
                    <Col md={6} sm={12}>
                      <br />
                      <h2 className="about-wrapper__info-text">
                        <strong>Skills</strong>
                      </h2>
                      <ul>
                        {/* eslint-disable-next-line react/prop-types */}
                        {skills.map(skill => {
                          return (
                            <li className="about-wrapper__info-text" key={Math.random()}>
                              {skill.content}
                            </li>
                          );
                        })}
                      </ul>
                    </Col>
                  ) : null}
                  <Col md={6} sm={12}>
                    <br />
                    {/* eslint-disable-next-line react/prop-types */}
                    {coursework.length ? (
                      <h2 className="about-wrapper__info-text">
                        <strong>Coursework</strong>
                      </h2>
                    ) : null}
                    <ul>
                      {/* eslint-disable-next-line react/prop-types */}
                      {coursework.map(course => {
                        return (
                          <li className="about-wrapper__info-text" key={Math.random()}>
                            {course.course_name}
                          </li>
                        );
                      })}
                    </ul>
                  </Col>
                </Row>
                {resumeUrl && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resumeUrl}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
