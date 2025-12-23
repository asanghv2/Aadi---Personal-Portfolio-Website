
import { PortfolioData } from './types';

export const RESUME_DATA: PortfolioData = {
  name: "Aadi Sanghvi",
  title: "Computer Science Student",
  email: "asanghv2@uwo.ca",
  location: "London, Ontario",
  linkedin: "https://www.linkedin.com/in/aadi-s-8441b926b/",
  github: "https://github.com/asanghv2",
  summary: "Dedicated Computer Science student with a versatile technical background and a passion for solving complex problems through technology. With experience spanning Product Management, software automation, and IT administration, I bring a unique cross-functional perspective to development teams. I am actively seeking opportunities to contribute and grow across diverse domains, including Software Engineering, Business Analysis, Artificial Intelligence, and Cybersecurity. Driven by a commitment to building secure, intelligent, and user-centric solutions that drive real-world impact.",
  experience: [
    {
      company: "ScratchSCN (Western Cyber Society)",
      role: "Project Manager and Developer",
      duration: "Sep 2025 – Present",
      location: "London, Ontario (Hybrid)",
      description: [
        "Defined core product requirements and converted them into a prioritized backlog in Notion; enabled a 7-member development team to plan weekly sprints with ~20% clearer task alignment.",
        "Led weekly sprint planning, stand-ups, and async progress syncs; improved visibility of blockers and reduced task rollover across sprints by ~25%.",
        "Broke down technical features into user-centric stories with acceptance criteria; reduced rework during development cycles and sped up prototype iteration.",
        "Collaborated with stakeholders to validate feature prioritization based on user value and technical feasibility, ensuring roadmap alignment before development."
      ],
      skills: ["Agile", "Scrum", "Product Management", "Notion", "Project Planning"]
    },
    {
      company: "Osian Softcon Ltd.",
      role: "IT Intern",
      duration: "Jul 2025 – Aug 2025",
      location: "Remote",
      description: [
        "Built Python automation to handle internal email notifications; removed manual steps from communication workflows and reduced wait times for internal updates by ~40%.",
        "Used GitHub for version control, managing pull requests and issue tracking with the development team; improved code review turnaround time by ~30%.",
        "Assisted with early exploration of Azure cloud deployment options, helping the team assess scalability and automation needs for internal tooling."
      ],
      skills: ["Python", "Automation", "Git", "Azure", "GitHub"]
    },
    {
      company: "Maple Reinders Constructors Ltd.",
      role: "IT Administrator",
      duration: "Aug 2024 – Mar 2025",
      location: "Mississauga, Ontario",
      description: [
        "Managed inventory, device imaging, and technical onboarding for 50+ employees; lowered IT-related downtime during new hire onboarding by ~35%.",
        "Standardized documentation for laptop setup, network access, and troubleshooting; reduced repetitive help desk requests and improved support response consistency."
      ],
      skills: ["Technical Support", "Inventory Management", "Documentation", "Network Access"]
    }
  ],
  projects: [
    {
      title: "Weatherman — Chrome Extension",
      description: "A browser extension that extracts location names from webpages and displays real-time climate data using WeatherAPI; reduced user lookup steps by ~70% compared to manual weather search.",
      tags: ["JavaScript", "Chrome API", "REST API", "HTML/CSS"],
      image: "https://picsum.photos/seed/weather-extension/800/450"
    },
    {
      title: "Discord Weather Bot",
      description: "Created a Python bot that responds to live weather queries inside Discord channels using WeatherAPI and JSON processing; enabled multi-user access to real-time climate info without leaving chat.",
      tags: ["Python", "Discord.py", "JSON", "WeatherAPI"],
      image: "https://picsum.photos/seed/discord-bot/800/450"
    },
    {
      title: "LatticeTalk – Secure Messaging Platform",
      description: "Contributing to the development of an encrypted communication platform using post-quantum lattice-based cryptography; working with team to refine messaging flows and test prototype security logic.",
      tags: ["Cryptography", "Python", "Security", "Network Protocols"],
      image: "https://picsum.photos/seed/latticetalk/800/450"
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["Python", "Java", "C", "JavaScript", "SQL", "HTML/CSS", "R", "Kotlin"]
    },
    {
      category: "Technologies & Tools",
      items: ["REST APIs", "OpenCV", "Azure", "Git", "VS Code", "JIRA", "Trello", "Lucid Chart"]
    },
    {
      category: "Libraries & Soft Skills",
      items: ["Pandas", "NumPy", "Matplotlib", "Leadership", "Collaboration", "Problem-Solving"]
    }
  ],
  education: [
    {
      institution: "University of Western Ontario",
      degree: "Honors Specialization in Computer Science",
      duration: "May 2028",
      details: "Relevant Coursework: Data Structures & Algorithms, Software Tools & Systems Programming, Discrete Math, Object-Oriented Programming."
    }
  ]
};
