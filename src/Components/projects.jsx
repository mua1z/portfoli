import React from 'react';

const financeProjects = [
  {
    title: 'Loan Processing Automation',
    description:
      'Designed and implemented a workflow to automate loan application reviews, reducing manual processing time by 40%.',
    techStack: ['Excel VBA', 'Python', 'SQL'],
    impact: 'Improved accuracy and speed of loan approvals.',
  },
  {
    title: 'Client Advisory Dashboard',
    description:
      'Developed an internal dashboard for tracking client portfolios, credit limits, and risk indicators.',
    techStack: ['Power BI', 'Excel', 'SQL Server'],
    impact: 'Enabled real-time financial advisory for over 200 clients.',
  },
  {
    title: 'Mobile Banking Rollout Support',
    description:
      'Participated in the launch of a mobile banking platform by testing features and supporting user onboarding.',
    techStack: ['JIRA', 'Figma', 'Cross-functional Teams'],
    impact: 'Enhanced customer access and satisfaction by 30%.',
  },
];

const Projects = () => {
  return (
    <div className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">📊 Projects</h1>
      <div className="mt-8 space-y-8">
        {financeProjects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-950 bg-opacity-45 rounded-xl p-6 shadow-lg"
          >
            <h2 className="text-xl text-white font-semibold">{project.title}</h2>
            <p className="text-white mt-2">{project.description}</p>
            <p className="text-white mt-2 text-sm">
              <span className="font-semibold">Tech Stack:</span> {project.techStack.join(', ')}
            </p>
            <p className="text-white mt-2 text-sm italic">{project.impact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
