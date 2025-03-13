import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, FileText, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import {section} from "framer-motion/m";

// Define types for sections, skills, and projects
type Section = 'home' | 'about' | 'skills' | 'projects' | 'contact';

interface Skill {
  name: string;
  category: string;
}

interface Project {
  title: string;
  period: string;
  description: string;
  highlights: string[];
  technologies: string[];
  category: string;
}

function scrollToSection() {

}

// Main App component
function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
  const [isLoading, setIsLoading] = useState(true);

  const sections: Section[] = ['home', 'about', 'skills', 'projects', 'contact'];

  const sectionRefs = {
    home: useRef<HTMLDivElement | null>(null),
    about: useRef<HTMLDivElement | null>(null),
    skills: useRef<HTMLDivElement | null>(null),
    projects: useRef<HTMLDivElement | null>(null),
    contact: useRef<HTMLDivElement | null>(null),
  };

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // Simulate 2 seconds loading
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll event to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sections.forEach((section) => {
        const element = sectionRefs[section].current;
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to a specific section
  sectionRefs[section].current?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  } as ScrollIntoViewOptions);

  // Skills data
  const skills: Skill[] = [
    { name: 'Python', category: 'Programming' },
    { name: 'Java', category: 'Programming' },
    { name: 'C#', category: 'Programming' },
    { name: 'SQL', category: 'Database' },
    { name: 'MySQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Microsoft SQL Server', category: 'Database' },
    { name: 'Apache Spark', category: 'Big Data' },
    { name: 'Hadoop', category: 'Big Data' },
    { name: 'Data Visualization', category: 'Analytics' },
    { name: 'PowerBI', category: 'Analytics' },
    { name: 'QlikView', category: 'Analytics' },
    { name: 'ETL Pipelines', category: 'Data Engineering' },
    { name: 'Apache Airflow', category: 'Data Engineering' },
    { name: 'LangChain', category: 'AI/ML' },
    { name: 'LangGraph', category: 'AI/ML' },
    { name: 'Groq LLM', category: 'AI/ML' },
    { name: 'Machine Learning', category: 'AI/ML' },
    { name: 'Terraform', category: 'DevOps' },
    { name: 'Jenkins', category: 'DevOps' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Azure DevOps', category: 'DevOps' },
    { name: 'Git', category: 'Version Control' },
    { name: 'GitHub', category: 'Version Control' },
    { name: 'GitLab', category: 'Version Control' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Whatever I need to get the job done', category: 'Web Development' },
  ];

  // Projects data
  const projects: Project[] = [
    {
      title: 'Infrastructure Big Data - Emergency Calls Analysis',
      period: 'Sept 2024 - Present',
      description: 'Comprehensive Big Data architecture for emergency calls processing system',
      highlights: [
        'Developed Python-based data ingestion solution on VM',
        'Implemented distributed Hadoop cluster (1 NameNode, 2 DataNodes)',
        'Built data transformation layer using Apache Spark and Java',
        'Configured MongoDB for flexible NoSQL storage',
        'Orchestrated data flows with Apache NiFi',
        'Created analytical dashboards using Power BI',
        'Automated pipeline with Apache Airflow and Bash scripts',
      ],
      technologies: ['Python', 'Java', 'Hadoop', 'Spark', 'NiFi', 'MongoDB', 'MySQL', 'Airflow', 'Power BI'],
      category: 'Big Data',
    },
    {
      title: 'AWS Cloud Data Platform',
      period: 'Jan 2024 - Present',
      description: 'Enterprise-scale data platform leveraging AWS services',
      highlights: [
        'Architected serverless data pipeline using AWS Lambda',
        'Implemented data lake using S3 and AWS Glue',
        'Built real-time processing with Kinesis Streams',
        'Deployed automated ETL jobs using AWS Step Functions',
        'Integrated Amazon QuickSight for BI reporting',
        'Implemented data security using AWS IAM and KMS',
      ],
      technologies: ['AWS Lambda', 'S3', 'Glue', 'Kinesis', 'Step Functions', 'QuickSight', 'IAM', 'CloudFormation'],
      category: 'Cloud',
    },
    {
      title: 'AI-Powered SQL Assistant',
      period: 'Sep 2024 - Jan 2025',
      description: 'A Streamlit-based web application that allows users to interact with a MySQL database using natural language.',
      highlights: [
        'Implemented natural language to SQL conversion using Groq LLM',
        'Developed an interactive chat interface with Streamlit',
        'Integrated MySQL database connectivity for real-time queries',
        'Executed SQL queries and displayed results in a human-readable format',
        'Maintained conversation history for better query tracking',
      ],
      technologies: ['Python', 'Streamlit', 'MySQL', 'LangChain', 'Groq LLM', 'Conda'],
      category: 'AI',
    },
    {
      title: 'Engimax Search Engine',
      period: 'Jan 2025 - Present',
      description: 'A query processing system using LangGraph for handling both data-related (performing semantic search) and general queries.',
      highlights: [
        'Implemented query type classification using Mistral LLM',
        'Integrated ChromaDB for data-related query retrieval',
        'Utilized Exa search engine for web-based general queries',
        'Generated responses using Mistral LLM',
        'Configured system to adjust retrieval parameters and modify prompts',
      ],
      technologies: ['Python', 'LangGraph', 'ChromaDB', 'Exa', 'Mistral LLM'],
      category: 'AI',
    },
  ];

  return (
      <div className="bg-[#F9F5EB] min-h-screen text-[#002B5B]">
        {isLoading ? (
            <LoadingScreen />
        ) : (
            <>
              <Navigation sections={sections} activeSection={activeSection} scrollToSection={scrollToSection} />
              <MainContent
                  sectionRefs={sectionRefs}
                  skills={skills}
                  projects={projects}
                  scrollToSection={scrollToSection}
              />
              <Footer />
            </>
        )}
      </div>
  );
}

// Loading Screen Component
const LoadingScreen = () => (
    <motion.div
        className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
    >
      <div className="relative w-24 h-24">
        <motion.div
            className="absolute w-full h-full border-4 border-[#002B5B] border-t-[#EA5455] rounded-full"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ rotate: { duration: 2, repeat: Infinity, ease: 'linear' }, scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } }}
        />
        <motion.div
            className="absolute w-16 h-16 border-4 border-[#EA5455] border-t-[#002B5B] rounded-full"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            animate={{ rotate: -360, scale: [1, 0.9, 1] }}
            transition={{ rotate: { duration: 1.5, repeat: Infinity, ease: 'linear' }, scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut', delay: 0.2 } }}
        />
        <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#EA5455] text-2xl"
            animate={{ scale: [1, 1.5, 1], rotate: [0, 180, 360], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          ✦
        </motion.div>
      </div>
    </motion.div>
);

// Navigation Component
const Navigation = ({ sections, activeSection, scrollToSection }: {
  sections: Section[];
  activeSection: Section;
  scrollToSection: (section: Section) => void;
}) => (
    <nav className="fixed top-0 left-0 right-0 bg-[#F9F5EB]/90 backdrop-blur-sm z-50 py-4 shadow-md">
      <div className="container mx-auto px-4">
        <ul className="flex justify-center space-x-8">
          {sections.map((section) => (
              <li key={section}>
                <button
                    onClick={() => scrollToSection(section)}
                    className={`capitalize font-medium hover:text-[#EA5455] transition-colors ${
                        activeSection === section ? 'text-[#EA5455]' : ''
                    }`}
                >
                  {section}
                </button>
              </li>
          ))}
        </ul>
      </div>
    </nav>
);

// Main Content Component
const MainContent = ({ sectionRefs, skills, projects, scrollToSection }: {
  sectionRefs: Record<Section, React.RefObject<HTMLDivElement>>;
  skills: Skill[];
  projects: Project[];
  scrollToSection: (section: Section) => void;
}) => (
    <div className="pt-20">
      <HomeSection ref={sectionRefs.home} />
      <AboutSection ref={sectionRefs.about} />
      <SkillsSection ref={sectionRefs.skills} skills={skills} />
      <ProjectsSection ref={sectionRefs.projects} projects={projects} />
      <ContactSection ref={sectionRefs.contact} />
    </div>
);

// Footer Component
const Footer = () => (
    <footer className="bg-[#F9F5EB] text-[#002B5B] py-6 shadow-md mt-20 fixed bottom-0 left-0 right-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-8">
            <a href="https://github.com/shiiinooo" target="_blank" rel="noopener noreferrer" className="hover:text-[#EA5455] transition-colors duration-300 flex items-center gap-2">
              <Github size={20} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ahmed-el-ghassib/" target="_blank" rel="noopener noreferrer" className="hover:text-[#EA5455] transition-colors duration-300 flex items-center gap-2">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="mailto:your@email.com" className="hover:text-[#EA5455] transition-colors duration-300 flex items-center gap-2">
              <Mail size={20} /> Email
            </a>
          </div>
          <div>
            <a href={`${import.meta.env.BASE_URL}assets/el_ghassib_ahmed_cv.pdf`} target="_blank" rel="noopener noreferrer" className="hover:text-[#EA5455] transition-colors duration-300 flex items-center gap-2">
              <FileText size={20} /> Resume
            </a>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-[#002B5B]/70">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
);

export default App;