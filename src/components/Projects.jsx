import React from 'react';

const projectsData = [
  {
    title: "Power BI Sales Dashboard",
    description: "Interactive dashboard analyzing revenue, customer trends, and regional sales performance.",
    tags: ["Power BI", "DAX", "Power Query"],
    link: "https://docs.google.com/presentation/d/181W_LJo2j8-2n6fabyeWpu-HF3iBdkgai7TsAYjM5yk/edit?usp=sharing",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1000"
  },
  {
    title: "SQL E-commerce Analysis",
    description: "Deep analysis of customer orders, retention, and purchase patterns using SQL.",
    tags: ["SQL", "MySQL", "Analytics"],
    link: "https://docs.google.com/presentation/d/181W_LJo2j8-2n6fabyeWpu-HF3iBdkgai7TsAYjM5yk/edit?usp=sharing",
    image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=1000"
  },
  {
    title: "Python Data Cleaning",
    description: "Automated cleaning pipeline using Pandas and NumPy for messy datasets.",
    tags: ["Python", "Pandas", "NumPy"],
    link: "https://docs.google.com/presentation/d/181W_LJo2j8-2n6fabyeWpu-HF3iBdkgai7TsAYjM5yk/edit?usp=sharing",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=1000"
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
            <div 
              className="project-image" 
              style={{ backgroundImage: `url(${project.image})` }}
            ></div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.tags.map((tag, tIndex) => (
                  <span key={tIndex}>{tag}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a href={project.link} target="_blank" rel="noopener noreferrer">Go to Project</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
