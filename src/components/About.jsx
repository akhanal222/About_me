// src/components/About.jsx

import React from "react";
const About = () => {
  const skills = [
    "JavaScript (React, Node.js, Express)",
    "Python",
    "Java (Spring Boot)",
    "C / C++",
    "SQL (PostgreSQL, MySQL)",
    "AWS (S3, EC2)",
    "Docker",
    "Git & GitHub",
    "Linux",
    "Data Structures & Algorithms",
    "REST APIs",
  ];

  const courses = [
    "Operating Systems",
    "Computer Networks",
    "Database Systems",
    "Artificial Intelligence & Machine Learning",
    "Software Security",
    "Algorithms & Data Structures",
  ];

  return (
    <section id="about" className="section-padding about-section">
      <h2 className="section-header">About Me</h2>

      <div className="content-container">
        <div className="bio">
          <h3>Bio & Education</h3>
          <p>
            I am a <strong>Computer Science undergraduate</strong> at{" "}
            <strong>UNC Greensboro (UNCG)</strong>, expected to graduate around{" "}
            <strong>December 2026</strong>. I enjoy building{" "}
            <strong>full-stack web applications</strong> and working close to
            the system level, especially in areas like{" "}
            <strong>
              operating systems, security, and cloud-based applications
            </strong>
            .
          </p>

          <p>
            I have hands-on experience developing real-world projects using{" "}
            <strong>
              React, Node.js, PostgreSQL, Spring Boot, Docker, and AWS
            </strong>
            , along with academic experience in{" "}
            <strong>
              machine learning, networking, and systems programming
            </strong>
            . I value clean code, strong fundamentals, and learning by building.
          </p>
        </div>

        <div className="skills">
          <h3>Technical Stack</h3>
          <div className="skills-list">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>

          <h3>Relevant Coursework</h3>
          <ul className="course-list">
            {courses.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
