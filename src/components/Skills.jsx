import React from 'react';

const skillsData = [
  { title: "Data Visualization", content: "Power BI, Plotly, Matplotlib, Seaborn" },
  { title: "Data Analysis", content: "Pandas, NumPy, DAX, Power Query" },
  { title: "Database & Querying", content: "MySQL, SQL, Power Pivot" },
  { title: "Programming", content: "Python, Data Cleaning, Automation" },
  { title: "Reporting", content: "Excel, Google Sheets, KPI Reporting" }
];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="section-title">
        <h2>Skills</h2>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <h3>{skill.title}</h3>
            <p>{skill.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
