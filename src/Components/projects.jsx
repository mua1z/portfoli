import React from 'react';
import { FaRegMoneyBillAlt, FaChartLine, FaMobileAlt } from 'react-icons/fa';
import { MdOutlineDashboardCustomize } from 'react-icons/md';
import { BsDatabaseGear } from 'react-icons/bs';

const financeProjects = [
  {
    icon: <FaRegMoneyBillAlt size={40} className="text-green-400" />,
    title: 'Loan Processing Automation',
    description:
      'Designed and implemented a workflow to automate loan application reviews, reducing manual processing time by 40%.',
    techStack: ['Excel VBA', 'Python', 'SQL'],
    impact: 'Improved accuracy and speed of loan approvals.',
  },
  {
    icon: <MdOutlineDashboardCustomize size={40} className="text-blue-400" />,
    title: 'Client Advisory Dashboard',
    description:
      'Developed an internal dashboard for tracking client portfolios, credit limits, and risk indicators.',
    techStack: ['Power BI', 'Excel', 'SQL Server'],
    impact: 'Enabled real-time financial advisory for over 200 clients.',
  },
  {
    icon: <FaMobileAlt size={40} className="text-indigo-400" />,
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
  <section id='project'>   <h1 className="text-2xl md:text-4xl text-white font-bold mb-10">
        📊 Key Projects
      </h1></section> 
      <div className="grid gap-8 md:grid-cols-2">
        {financeProjects.map((project, index) => (
          <div
            key={index}
            className="bg-slate-950 bg-opacity-60 border border-slate-700 rounded-xl p-6 shadow-xl hover:shadow-slate-700 transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-slate-800 p-3 rounded-full">{project.icon}</div>
              <h2 className="text-xl text-white font-semibold">{project.title}</h2>
            </div>
            <p className="text-white text-sm mb-3">{project.description}</p>
            <p className="text-sm text-white">
              <span className="font-semibold text-slate-300">Tech Stack:</span>{' '}
              {project.techStack.join(', ')}
            </p>
            <p className="text-xs text-slate-400 mt-2 italic">{project.impact}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
