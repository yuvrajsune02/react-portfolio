import "./hero.scss";
export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm Yuvraj</h1>
        
        <p className="hero-subtitle">
          Full Stack Developer building scalable web applications
          <br />
          with React, Next.js, Node.js and Cloud technologies.
        </p>
        
        <p className="hero-description">
          I create performant, responsive and production-ready
          <br />
          applications focused on user experience and business impact.
        </p>
        
        <div className="hero-buttons">
          <button className="btn btn-primary">View Projects</button>
          <button className="btn btn-secondary">Download Resume</button>
          <button className="btn btn-tertiary">Contact Me</button>
        </div>
      </div>

      <div className="hero-technologies">
        React • Next.js • TypeScript • Node.js • SQL • Azure
      </div>
    </section>
  );
};
