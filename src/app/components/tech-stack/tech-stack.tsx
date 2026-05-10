import "./tech-stack.scss";
export default function TechStack() {
  return (
    <div>
      <section className="tech-stack">
        <div className="container">
          <div className="section-heading">
            <h2>Tech Stack</h2>
            <p>
              Technologies and tools I use to build scalable, high-performance
              web applications.
            </p>
          </div>

          <div className="tech-grid">
            <div className="tech-card">
              <h3>Frontend</h3>

              <div className="tech-items">
                <span>React.js</span>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>JavaScript</span>
                <span>Angular</span>
                <span>Redux</span>
                <span>Tailwind CSS</span>
                <span>SCSS</span>
              </div>
            </div>

            <div className="tech-card">
              <h3>Backend</h3>

              <div className="tech-items">
                <span>Node.js</span>
                <span>Express.js</span>
                <span>REST APIs</span>
                <span>JWT Authentication</span>
                <span>Socket.io</span>
                <span>Microservices</span>
              </div>
            </div>

            <div className="tech-card">
              <h3>Database</h3>

              <div className="tech-items">
                <span>MySQL</span>
                <span>PostgreSQL</span>
                <span>MongoDB</span>
                <span>SQL</span>
              </div>
            </div>
            <div className="tech-card">
              <h3>Cloud & DevOps</h3>

              <div className="tech-items">
                <span>Azure Functions</span>
                <span>AWS Lambda</span>
                <span>Docker</span>
                <span>GitHub Actions</span>
                <span>Vercel</span>
              </div>
            </div>

            <div className="tech-card">
              <h3>Tools & Platforms</h3>

              <div className="tech-items">
                <span>Git</span>
                <span>GitHub</span>
                <span>Postman</span>
                <span>Figma</span>
                <span>VS Code</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
