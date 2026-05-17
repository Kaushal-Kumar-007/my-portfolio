import React from 'react';

const projectsData = [
  {
    title: "Power BI Sales Dashboard",
    description: "Interactive dashboard analyzing revenue, customer trends, and regional sales performance.",
    tags: ["Power BI", "DAX", "Power Query"],
    links: { dashboard: "#", github: "#", caseStudy: "#" }
  },
  {
    title: "SQL E-commerce Analysis",
    description: "Deep analysis of customer orders, retention, and purchase patterns using SQL.",
    tags: ["SQL", "MySQL", "Analytics"],
    links: { dashboard: "#", github: "#", caseStudy: "#" }
  },
  {
    title: "Python Data Cleaning",
    description: "Automated cleaning pipeline using Pandas and NumPy for messy datasets.",
    tags: ["Python", "Pandas", "NumPy"],
    links: { dashboard: "#", github: "#", caseStudy: "#" }
  }
];

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <div className="section-title">
        <h2>Projects</h2>
      </div>

      <div className="project-grid">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image"></div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex}>{tag}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.links.dashboard}>Dashboard</a>
                <a href={project.links.github}>GitHub</a>
                <a href={project.links.caseStudy}>Case Study</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
