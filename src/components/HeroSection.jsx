import React from 'react';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-Content">
        <h1 className="hero-title">
          WEB DEV.
          <br /> BUILDING DIGITAL EXPERIENCES.
        </h1>
        <p className="hero-description">
          Building scalable .NET applications using Clean Architecture, CQRS,
          and RESTful APIs. Proven track record in competitive programming and
          real-world project delivery
        </p>
      </div>
      <div className="hero-logo-wrapper">
        <img className="hero-logo" src="/avatar.png"></img>
      </div>
    </section>
  );
}

export default HeroSection;
