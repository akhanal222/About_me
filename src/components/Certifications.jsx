// src/components/Certifications.jsx

import React from 'react';

const certificationsData = [
  {
    id: 1,
    name: "AWS Certified Cloud Practitioner (CLF-C01)",
    issuer: "Amazon Web Services (AWS)",
    date: "Obtained: June 2024",
    verifyLink: "https://www.credly.com/badges/5344163e-bde7-40d6-91b3-2b02bc0f0fe1/public_url" 
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding">
      <h2 className="section-header">Certifications</h2>
      <div className="certifications-grid">
        {certificationsData.map((cert) => (
          <div key={cert.id} className="cert-card">
            <h3 className="cert-name">{cert.name}</h3>
            <p className="cert-issuer">{cert.issuer}</p>
            <p className="cert-date">{cert.date}</p>
            
            <a 
              href={cert.verifyLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-cert-verify"
            >
              Verify Credential
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;