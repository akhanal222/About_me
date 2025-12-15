// // src/components/Hero.jsx

// import React from 'react';

// const Hero = () => {
//   return (
//     <section id="hero" className="hero-section">
//       <div className="hero-content">
//         <p className="greeting">Hi, my name is</p>
//         <h1 className="name">Ashirvad Khanal</h1>
//         <h2 className="tagline">I build things for the web and beyond.</h2>
//         <p className="description">
//           I'm a computer science student specializing in full-stack development. Currently, I'm focused on learning cloud infrastructure and contributing to open-source software.
//         </p>
//         <div className="cta-buttons">
//           <a href="#projects" className="btn-primary">View My Work</a>
//           <a href="mailto:your.email@example.com" className="btn-secondary">Get In Touch</a>
//         </div>
//       </div>
//       {/* Optional: Add an image tag here for your professional photo */}
//     </section>
//   );
// };

// export default Hero;

// src/components/Hero.jsx

import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <p className="greeting">Hi, my name is</p>

        <h1 className="name">Ashirvad Khanal</h1>

        <h2 className="tagline">
          I build full-stack applications and backend systems.
        </h2>

        <p className="description">
          I’m a{" "}
          <strong>Computer Science undergraduate at UNC Greensboro</strong> with
          hands-on experience in <strong>React, Laravel, Spring Boot</strong>,{" "}
          and <strong>PostgreSQL</strong>. I enjoy working across the stack from
          designing APIs and databases to building clean, user-focused
          interfaces and I’m currently seeking{" "}
          <strong>software engineering internships</strong>.
        </p>

        <div className="cta-buttons">
          <a href="#projects" className="btn-primary">
            View My Work
          </a>

          <a href="mailto:ashirvad.khanal@gmail.com" className="btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>

      {/* Optional: Add an image tag here for your professional photo */}
    </section>
  );
};

export default Hero;
