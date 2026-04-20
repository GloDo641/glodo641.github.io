/**
 * PORTFOLIO CONTENT
 * ─────────────────────────────────────────────────────────────
 * Edit this file to update your portfolio. No HTML/CSS knowledge
 * needed — just update the values below and save.
 * ─────────────────────────────────────────────────────────────
 */

const PORTFOLIO = {

  // ── IDENTITY ──────────────────────────────────────────────
  identity: {
    name:           "Donovan Glodt",
    username:       "glodo641",
    role:           "BTS Cloud Computing Student",
    school:         "Lycée Guillaume Kroll",
    email:          "donovanglodt@gmail.com",
    github:         "https://github.com/glodo641",
    githubDisplay:  "github.com/glodo641",
    linkedin:       "https://linkedin.com/in/donovan-glodt-251281389",
    linkedinDisplay:"donovan-glodt",
    cv:             "../Documents/CV.pdf"
  },

  // ── ABOUT ─────────────────────────────────────────────────
  // Add or remove paragraphs as needed.
  about: [
    "I am Donovan Glodt, currently studying for a BTS in Cloud Computing at the LGK (Lycée Guillaume Kroll).",
    "This portfolio showcases all that I have learned on my path and what I have accomplished throughout my studies."
  ],

  // ── SOFT SKILLS ───────────────────────────────────────────
  // Shown in the CV Summary panel on the home page.
  softSkills: [
    "Communication", "Teamwork", "Problem Solving",
    "Time Management", "Adaptability", "Attention to Detail",
    "Self-learning", "Documentation"
  ],

  // ── LANGUAGES ─────────────────────────────────────────────
  // level: any string, e.g. "Native", "Fluent", "Professional", "B2", etc.
  languages: [
    { language: "Luxembourgish", level: "Native"       },
    { language: "English",       level: "Native"       },
    { language: "German",        level: "C1"        },
    { language: "French",        level: "C1"       }
  ],

  // ── WORK EXPERIENCE ───────────────────────────────────────
  // role, company, years, description (set null to hide description)
  workExperience: [
    {
      role:        "Academic Internship",
      company:     "CTIE - Centre des technologies et informations d'État",
      years:       "03/2024 (1 week)",
      description: "Analysis of the organisation's proceedures in the state administration"
    }
  ],

  // ── SKILLS ────────────────────────────────────────────────
  // Each entry is a directory-like category with a list of skills.
  skills: [
    { category: "cloud/",       items: ["Microsoft Azure", "Docker", "Power Apps", "Power Automate"] },
    { category: "systems/",     items: ["Linux", "Windows Server", "VirtualBox", "Computer Hardware"] },
    { category: "networking/",  items: ["Cisco", "IT Infrastructure", "Database Design"] },
    { category: "programming/", items: ["Java", "Python"] },
    { category: "scripting/",   items: ["Bash", "PowerShell"] },
    { category: "office/",      items: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"] },
    { category: "management/",  items: ["SCRUM", "Resource Planning", "Documentation"] }
  ],

  // ── PROJECTS ──────────────────────────────────────────────
  // status:          "complete" | "wip" | "cancelled"
  // link:            null if no downloadable document
  // date:            e.g. "January 2025" — shown under description in the row
  // fullDescription: longer text shown in the detail pop-up (falls back to description)
  // reflection:      personal reflection shown in pop-up (omit or null to hide)
  // image:           path to a project image, e.g. "../images/project-rockstor.jpg" (null to hide)
  // tech:            MAIN tags — appear in the row AND in the search filter pills
  // extraTech:       EXTRA tags — appear only inside the detail pop-up
  projects: [
    {
      id:               "rockstor-nas",
      title:            "Server Installation with Rockstor NAS and hardware RAID",
      description:      "Documentation and installation of a server and installing Rockstor NAS system.",
      fullDescription:  "This project involved researching and setting up a server from scratch, using resources supplied to us. \n" +
                        "It involved installing hardware components into a server case, documenting the process, and possible issues that were encountered. \n" +
                        "Additionally, a hardware RAID configuration was set up to provide redundancy and data protection. \n" +
                        "The server was then configured to run Rockstor NAS system, which provides a web interface for managing storage and RAID configurations. \n" +
                        "The project was documented in a report and a presentation was given to demonstrate the software RAID configuration and the Rockstor NAS system. \n\n" +
                        "The final grade is yet to be given.",
      reflection:       "This project was an amazing learning experience. I learned a lot about server hardware, RAID configurations, and accessing storages over the network. " +
                        "I'm happy with the result and the knowledge I gained from this project.",
      image:            "../images/rockstor-logo.png",
      tech:             ["Server Hardware", "Server Configuration", "Linux", "School Project"],
      extraTech:        ["Storage Management", "Research", "Documentation"],
      link:             "../Documents/Rockstor_Installation_Documentation.pdf",
      linkLabel:        "Download Documentation",
      status:           "complete",
      date:             "13/04/2026"
    },
    {
      id:               "vpn-setup",
      title:            "Windows Server 2022 VPN & DirectAccess Setup",
      description:      "Implementation and configuration of VPN and DirectAccess services on Windows Server 2022.",
      fullDescription:  "This project involved setting up and configuring VPN and DirectAccess services on a Windows Server 2022 environment. " +
                        "The goal was to provide secure remote access to the organization's network. \n\n " +
                        "This project was done with another student as part of a school group project. " +
                        "We worked together to research, configure, and document the setup process. \n\n " +
                        "The final grade was 6.3 out of 8.",
      reflection:       "This project went in all great, only some mistakes in the setup of the network between the virtual machines. " +
                         "Overall it was a great learning experience and I'm happy with the result.",
      image:            "../images/windows_server.jpg",
      tech:             ["Windows Server 2022", "Server Configuration","School Project"],
      extraTech:        ["VPN", "DirectAccess", "Group Project", "Research", "Documentation"],
      link:             "../Documents/WindowsVPNProjectDocumentation.pdf",
      linkLabel:        "Download Documentation",
      status:           "complete"
    },
    {
      id:               "steam-viewer",
      title:            "PowerApps & Power Automate — Steam Achievement Viewer",
      description:      "An application built with Power Apps & Power Automate to view Steam achievements for any game.",
      fullDescription:  "This project involved building an application using Power Apps and Power Automate to view Steam achievements for any game. \n" +
                        "Power Automate was used with the Steam API to retrieve data from the Steam platform. \n" +
                        "The data was stored within Dataverse for easy access and management. \n" +
                        "With the application you were able to view all your games in a list and progress of achievements, by clicking on a game you were able to view a list of achievements and their completion status. \n\n" +
                        "The application isn't published due to limitations with the Power Apps environments and slowness of the Power Automate flow.",
      reflection:       "This project was quite fun to work on with the Steam API, however it was frustrating trying to find a way to store the information in a way that was accessible with the resources provided. " +
                        "Overall I'm quite happy with the outcome but would rather not have to deal with Power Apps again.",
      image:            "../images/Powerapps-logo.png",
      tech:             ["Automation", "Power Platform", "API Integration", "School Project"],
      extraTech:        ["Steam API", "Power Automate", "Dataverse", "Power Apps"],
      link:             "../Documents/SteamAchievementViewer.pdf",
      linkLabel:        "Download Presentation",
      status:           "complete"
    },
    {
      id:               "log-analyser",
      title:            "Python Log Analyser",
      description:      "A Python script to analyse Minecraft server logs — tracks user authentication, logins, and logouts.",
      fullDescription:  "This project involved creating a Python script to analyse Minecraft server logs. " +
                        "The script tracks user authentication, logins, and logouts " +
                        "The script was created as part of a school project to learn about Python and log analysis.",
      reflection:       "This project was very small so won't go into too much detail and have no documentation, however it was a good way of learning how to get logs remotely using Python.",
      image:            "../images/Python-logo.png",
      tech:             ["Python", "School Project"],
      extraTech:        [],
      link:             null,
      linkLabel:        null,
      status:           "complete"
    },
    {
      id:               "game-server",
      title:            "Game Server Hosting Web Application",
      description:      "A planned web application that will allow users to host servers for a selection of games.",
      fullDescription:  "This is a work in progress project that aims to create a web application that will allow users to host servers for a selection of games.\n\n" +
                        "The application will allow users to select a game, configure server settings, and deploy a server with a single click.\n\n" +
                        "The application is being built using Linux Server, Docker, and a Web Application.",
      reflection:       null,
      image:            null,
      tech:             ["Linux Server", "Docker", "Web Application", "School Project"],
      extraTech:        [],
      link:             null,
      linkLabel:        null,
      status:           "wip"
    }
  ],

  // ── CERTIFICATIONS ────────────────────────────────────────
  // priority: true = shown first, false = shown in "Show More"
  // Set pdf: null if no score report is available.
  certifications: [
    {
      title:       "Microsoft Certified: Azure Fundamentals (AZ-900)",
      issuer:      "Microsoft Azure",
      badge:       "https://images.credly.com/size/340x340/images/be8fcaeb-c769-4858-b567-ffaaa73ce8cf/image.png",
      credlyLink:  "https://www.credly.com/badges/e860076c-a7e8-44cf-b9bb-ca5d7efd877c/public_url",
      pdf:         "../Documents/Azure_AZ-900.pdf",
      priority:    true
    },
    {
      title:       "Microsoft Office Specialist: Associate (Microsoft 365 Apps)",
      issuer:      "Microsoft Office",
      badge:       "https://images.credly.com/size/340x340/images/5df82cee-c54c-4006-b17d-ff9a5127beeb/image.png",
      credlyLink:  "https://www.credly.com/badges/a45e73bd-5484-4991-b77b-7b6e9cbbc70e/public_url",
      pdf:         null,
      priority:    true
    },
    {
      title:       "Microsoft Office Specialist: Word Expert",
      issuer:      "Microsoft Office",
      badge:       "https://images.credly.com/size/340x340/images/c9ab0811-5167-49b4-9459-7dd2e3d0a192/image.png",
      credlyLink:  "https://www.credly.com/badges/bc00656c-e9ea-441c-bea3-c721c38307b1/public_url",
      pdf:         "../Documents/Microsoft_Word_Expert.pdf",
      priority:    true
    },
    {
      title:       "Microsoft Office Specialist: PowerPoint Associate",
      issuer:      "Microsoft Office",
      badge:       "https://images.credly.com/size/340x340/images/48efb29e-31ed-414f-899e-088197b10be7/image.png",
      credlyLink:  "https://www.credly.com/badges/d85e653d-e46a-4374-a8ef-0e541230dd33/public_url",
      pdf:         "../Documents/Microsoft_Powerpoint_Associate.pdf",
      priority:    false
    },
    {
      title:       "Microsoft Office Specialist: Word Associate",
      issuer:      "Microsoft Office",
      badge:       "https://images.credly.com/size/340x340/images/323ec4a8-7d1f-486f-9c68-258947965b8e/image.png",
      credlyLink:  "https://www.credly.com/badges/d729030b-1bd6-4534-bebc-2778d39b051a/public_url",
      pdf:         "../Documents/Microsoft_Word_Associate.pdf",
      priority:    false
    },
    {
      title:       "Microsoft Office Specialist: Excel Associate (Office 2019)",
      issuer:      "Microsoft Office",
      badge:       "https://images.credly.com/size/340x340/images/9d2bcbe6-519f-4ed0-ad34-aca077421568/MOS_Excel.png",
      credlyLink:  "https://www.credly.com/badges/1945ba57-862a-4821-8ea5-7ebbb7cd7681/public_url",
      pdf:         "../Documents/Microsoft_Excel_Associate.pdf",
      priority:    false
    }
  ],

  // ── WORKSHOPS ─────────────────────────────────────────────
  // visits[]:         site visits with learnings lists
  // speakers[]:       major external speakers (full card)
  // smallerSpeakers[]: one-session talks — just name + topic
  workshops: {
    visits: [
      {
        title:       "Datacentre Visit — LuxConnect",
        description: "Comprehensive site visit to LuxConnect to understand datacentre operations and enterprise infrastructure. Gained hands-on exposure to large-scale hardware, network architecture, and physical security practices.",
        location:    "LuxConnect, Bettembourg, Luxembourg",
        date:        "09/01/2026",
        learnings: [
          "Datacentre infrastructure design and physical layout",
          "Cooling and power management systems",
          "Physical security measures and access control",
          "Disaster recovery and backup strategies",
          "How they work with clients and provide infrastructure services"
        ]
      },
      {
        title:       "AWS re:Invent 2026 — Arhs Group",
        description: "Presentations on multiple cloud infrastructures, AI services, and enterprise solutions.",
        location:    "Arhs Group, Belval, Luxembourg",
        date:        "04/03/2026",
        learnings: [
          "Cloud infrastructure and AWS services",
          "AI for customer service and automation",
          "IDE using AWS AI services for building applications",
          "MCP Servers for AI integration"
        ]
      },
      {
        title:       "Visite Armée du Luxembourg",
        description: "Site visit of the Army of Luxembourg to understand military IT infrastructure, telecommunications, and security.",
        location:    "Härebierg, Diekirch, Luxembourg",
        date:        "13/03/2026",
        learnings: [
          "Satellite communication systems and military operations",
          "Military IT infrastructure and cybersecurity practices",
          "Site exploration and understanding of military functions"
        ]
      }
    ],

    speakers: [
      {
        name:        "Xavier Nix",
        description: "Provided in-depth training on Microsoft Azure Fundamentals and guided our class through preparation for the AZ-900 certification exam. \n" + 
        "Covered one lecture for the PL-900 course about the Power Platform fundamentals. \n" +
        "Held a week long session on PowerShell scripting and automation as part of the AZ-040 content.",
        learnings: [
          "Microsoft Azure core concepts and cloud service models",
          "AZ-900 certification exam structure and preparation",
          "Microsoft Power Platform fundamentals, including Power Apps and Power Automate",
          "PowerShell scripting for Windows server administration",
          "Microsoft Azure CLI and PowerShell cmdlets"
        ]
      }
    ],

    smallerSpeakers: [
      { name: "Alain Hitzig", topic: "Quantum Computing",  
        description: "Introduction to quantum computing principles, applications, and future implications for cloud infrastructure and risks in cybersecurity." },
      { name: "Christian Stemmler", topic: "Cloud Sustainability",  
        description: "Lecture on the environmental impact of cloud computing and how the industry is working towards more sustainable infrastructure." },
      { name: "Yves Schlüter",      topic: "Interview Simulations", 
        description: "Practical session simulating real job interviews, with feedback on communication, technical answers, professional presentation, and CVs and cover letters." },
      { name: "Restena",            topic: "Phishing Defense",      
        description: "Presentation on phishing attack techniques and how to identify and prevent them." },
      { name: "Fabio Wiethoff",      topic: "Picture yourself", 
        description: "Lecture on how to present yourself confidently in stance and posture for interviews and presentations. Made our photos for the portfolio." },
    ]
  },

  // ── LEARNING PATH ─────────────────────────────────────────
  // education[]:     formal studies
  //   subjects[]:    semesters — each has a semester label and a courses[] array
  //     courses[]:   { name, description } — individual subjects/modules
  //   reflection:    personal reflection paragraph (null to hide)
  // onlineCourses[]: self-study courses, platforms, etc.
  learningPath: {
    education: [
      {
        school:      "Lycée Guillaume Kroll",
        degree:      "BTS — Cloud Computing",
        years:       "2025 - Present",
        location:    "Luxembourg",
        description: "The BTS Cloud Computing programme is about cloud infrastructure, virtualization, security, and management. We learn a lot about different services, tools and technologies used in the cloud to build infrastructure, deploy applications, and manage cloud environments.",
        subjects: [
          {
            semester: "Semester 1",
            highlights: "Highlight of this semester was learning the fundamentals of the cloud and its tools, additionally learning how to use Windows Server and Linux systems.\n\n" +
            "We learnt about Cisco networking, computer hardware, how to present yourself professionally, and how to work on projects."
          },
          {
            semester: "Semester 2",
            highlights: "Highlight of this semester was working on physical servers and working on projects related to virtualization. Also more in depth knowledge into Cloud systems and actually using these tools we learnt about."
          }
          // add more semesters: { semester: "Semester 3", highlights: "..." }
        ],
        reflection: "During my BTS Studies, I have learned a lot about many topics that have interested me. Having more focus on the technical side rather than the theoritical side has helped me understand these concepts better.\n" +
          "During the time I have been able to use my strength in problem-solving and fast learning to understand the complex topics, we're learning about.\n" +
          "Working with the class and collaborating on projects has been a great experience to improve my weakness in communication and teamwork. Also they have helped me in learning how to plan myself and manage my time better.\n\n" +
          "All in all, I am very happy to have switched my studies to this field, I hope to further my knowledge and skills during the 2 last semesters." // your personal reflection on the programme overall
      }
    ],
    onlineCourses: [
      {
        title:         "AZ-900: Microsoft Azure Fundamentals",
        platform:      "Pluralsight",
        description:   "Courses covering Azure fundamentals, including cloud concepts, Azure services and architecture, identity and management, security, deployment, and governance.",
        progressImage: "../images/AZ900-progress.png",   // path to course progress screenshot, e.g. "../images/az900-progress.png"
        examImage:     "../images/AZ900-testexam.png"    // path to exam/test results screenshot, e.g. "../images/az900-exam.png"
      },
      {
        title:         "AZ-040: Microsoft Azure Administration",
        platform:      "Pluralsight",
        description:   "Courses covering Azure administration, including virtual machines, storage, networking, and identity management. (In Progress)",
        progressImage: null,
        examImage:     null
      },
      {
        title:         "The System Administrator's Guide to Bash Scripting",
        platform:      "Pluralsight",
        description:   "Courses covering Bash scripting, including basic commands, file operations, and automation scripts. (In Progress)",
        progressImage: "../images/BASH-progress.png",
        examImage:     null
      },
      {
        title:         "Cloud Computing Fundamentals",
        platform:      "Pluralsight Skill IQ",
        description:   "Test on my knowledge of cloud computing fundamentals. Score : Proficient Average",
        progressImage: null,
        examImage:     "../images/CCFundamentals-SkillIQ.png"
      },
      // add more courses: { title, platform, description, progressImage, examImage }
    ]
  }

};
