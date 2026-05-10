"use client";

import "./featured-projects.scss";

const projects = [
  {
    title: "AI Job Portal",
    description:
      "Modern AI-powered recruitment platform with resume analysis, job matching, and admin dashboard.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MySQL",
      "JWT",
      "OpenAI API",
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Product Management System",
    description:
      "Real-time collaboration platform with Kanban boards, analytics, notifications, and task tracking.",
    tech: [
      "React",
      "Express.js",
      "Socket.io",
      "MySQL",
      "Redux",
    ],
    github: "#",
    live: "#",
  },
  {
    title: "Serverless Expense Tracker",
    description:
      "Cloud-native expense management application built using Azure Functions and serverless architecture.",
    tech: [
      "Next.js",
      "Azure Functions",
      "Cosmos DB",
      "Chart.js",
    ],
    github: "#",
    live: "#",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="featured-projects">
      <div className="container">
        <div className="section-header">
          <p className="subtitle">Portfolio</p>

          <h2>Featured Projects</h2>

          <p className="description">
            Real-world applications focused on performance,
            scalability, user experience, and business impact.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-image">
                <span>Project Preview</span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((item, idx) => (
                    <span key={idx}>{item}</span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-btn"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}