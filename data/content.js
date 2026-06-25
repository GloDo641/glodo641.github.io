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
    cv:             "../Documents/CV.pdf",
    cvFrench:       "../Documents/CV_French.pdf"
  },

  // ── ABOUT ─────────────────────────────────────────────────
  // Add or remove paragraphs as needed.
  about: [
    "I am Donovan Glodt, currently studying for a BTS in Cloud Computing at Lycée Guillaume Kroll (LGK).",
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
      description: "Analysis of the organisation's procedures in the state administration"
    }
  ],

  // ── SKILLS ────────────────────────────────────────────────
  // Each entry is a directory-like category with a list of skills.
  skills: [
    { category: "cloud/",          items: ["Microsoft Azure", "AWS", "Docker"] },
    { category: "virtualization/", items: ["Proxmox", "VMware", "VirtualBox"] },
    { category: "systems/",        items: ["Linux", "Windows Server", "NAS / Storage", "RAID", "Computer & Server Hardware"] },
    { category: "networking/",     items: ["Cisco", "IT Infrastructure", "VPN", "DHCP", "Database Design"] },
    { category: "programming/",    items: ["Java", "Python"] },
    { category: "scripting/",      items: ["Bash", "PowerShell"] },
    { category: "security/",       items: ["Risk Analysis", "Threat awareness", "Incident Response"] },
    { category: "office/",         items: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"] },
    { category: "management/",     items: ["SCRUM", "Resource Planning", "Documentation", "OKR / KPI / GTD"] },
    { category: "other/",          items: ["Power Apps", "Power Automate"] }
  ],

  // ── EXPLORE ───────────────────────────────────────────────
  // Redirection cards on the home page — one per dedicated page.
  // icon:        Font Awesome 6 class, e.g. "fa-solid fa-folder-open"
  // href:        target page (relative to pages/)
  // linkLabel:   text shown on the card's button
  explore: [
    {
      title:       "Projects",
      icon:        "fa-solid fa-folder-open",
      description: "Browse all of my projects in detail, with documentation, technologies used, and personal reflections.",
      href:        "projects.html",
      linkLabel:   "View my projects"
    },
    {
      title:       "Workshops",
      icon:        "fa-solid fa-chalkboard-user",
      description: "Discover the site visits, guest speakers, and hands-on sessions I have taken part in throughout my studies.",
      href:        "workshops.html",
      linkLabel:   "View my workshops"
    },
    {
      title:       "Learning Path",
      icon:        "fa-solid fa-graduation-cap",
      description: "Follow my formal education and the online courses I have completed to grow my skills.",
      href:        "learning.html",
      linkLabel:   "View my learning path"
    }
  ],

  // ── PROJECTS ──────────────────────────────────────────────
  // status:          "complete" | "wip" | "cancelled"
  // featured:        true = sorted to the top of the projects list and highlighted in orange
  // link:            null if no downloadable document
  // linkLabel:       text for the main download button (shown in the row AND the pop-up)
  // secondaryLink:      OPTIONAL second PDF — its button only appears inside the pop-up,
  //                     under the main one (e.g. a presentation). Omit/null to hide.
  // secondaryLinkLabel: text for that second button, e.g. "Download Presentation"
  // date:            e.g. "January 2025" — shown under description in the row
  // fullDescription: longer text shown in the detail pop-up (falls back to description)
  // reflection:      personal reflection shown in pop-up (omit or null to hide)
  // image:           path to a project image, e.g. "../images/project-rockstor.jpg" (null to hide)
  // images:          OPTIONAL pop-up PREVIEW gallery, loaded automatically from a folder.
  //                  Put the images in their own folder under images/ and NAME THEM
  //                  1.<ext>, 2.<ext>, 3.<ext> … in order (no gaps), then point to it:
  //                    images: { folder: "../images/minicfl", ext: "png" }
  //                  "ext" defaults to "png" if omitted. Loading stops at the first
  //                  missing number, so keep them sequential (1, 2, 3 …).
  //                  The pop-up shows as many thumbnails as fit on one row, then "+N more".
  //                  Click any thumbnail to open the full-screen viewer (← / → keys or the
  //                  on-screen arrows to flick through, Esc to close). Omit/null to hide.
  //                  (An explicit array of full paths, e.g. ["../images/a.png"], also works.)
  // tech:            MAIN tags — appear in the row AND in the search filter pills
  // extraTech:       EXTRA tags — appear only inside the detail pop-up
  projects: [
    {
      id:               "minicfl-azure-project",
      title:            "Azure deployment and resource management - MiniCFL Application",
      description:      "A project where we utilise what we learnt during our AZ-104 training and create a real application within Azure.",
      fullDescription:  "This project involved using Azure resources to create a web application with access to a database \n" +
                        "It's primary purpose was to demonstrate our skills in Azure and how we've grown in its usage. \n" +
                        "My teams project was a small simulation of a train going from one station to another and display its arrival times and possible delays. \n" +
                        "For this we used a VM running a database with an App service created out of a Azure Contair Registry image to make the database. The updates for the train were done using Azure functions. \n" +
                        "Alongside, we created policies, groups, RBAC assignments, budgets and used monitoring resources to demonstrate further our knowledge of Azure. \n\n" +
                        "The GitHub is private which container the image for the ACR, so I can't show it here. \n" +
                        "The app is accessible with this link: \n " +
                        "<a href='https://app-minicfl-web-dev-dwb4h6cnahghd2cs.francecentral-01.azurewebsites.net/' target='_blank' rel='noopener'>Here</a> \n" +
                        "(May not be accessible if the app has been shut off to save on costs)^\n" +
                        "The final grade is yet to be given.",
      reflection:       "This project, despite needing to be done within a short time, went really well, some issues arose where we needed to solve ourselves using what we learnt. \n" +
                        "Overall this project really demonstrates my knowledge and usage of Azure. It also shows how I can further improve on my skills within Cloud area.",
      image:            "../images/Azure-logo.png",
      images:           { folder : "../images/project-minicfl", ext : "png"},   // e.g. { folder: "../images/minicfl", ext: "png" }
      tech:             ["Microsoft Azure", "Web application", "Databases", "School Project"],
      extraTech:        ["Resource management", "Project management", "Monitoring", "Documentation", "User Management"],
      link:             "../Documents/MiniCFL_Azure_Documentation.pdf",
      linkLabel:        "Download Documentation",
      status:           "complete",
      date:             "25/06/2026",
      featured:         true
    },
    {
      id:               "proxmox-vmware-snapshots-template",
      title:            "Installation of Proxmox and VMWare - Specialisation : Snapshots & Templates",
      description:      "Documentation of Proxmox and VMWare installation, features and how to use them. Our specialisation was about both hypervisors snapshots and VM templates functions.",
      fullDescription:  "This project involved setting up a VMWare server with a vSphere client and Proxmox Server. \n" +
                        "We documented important features, like surrounding the setting up of VMs, backing them up, migrating them. \n" +
                        "Our specialisation was that of snapshots and VM templates and using them in detail with further documentation. \n" +
                        "At the end a presentation was given to demonstrate the usage of these specialisation and presenting how they worked underneath. \n\n" +
                        "The final grade is yet to be given.",
      reflection:       "This project was very good and taught me much about how to use Hypervisors with it's different features and how to manage VMs with a type 1 hypervisor." +
                        "I'm quite satisfied with the outcome, however some internal complications made it a bit more stressful.",
      image:            "../images/Proxmox_VMWare.png",
      images:           null,
      tech:             ["Server Configuration", "Proxmox", "VMWare","School Project"],
      extraTech:        ["Hypervisor configuration", "VM Configuration", "Documentation"],
      link:             "../Documents/Proxmox_VMWare_Snapshots_Templates_Documentation.pdf",
      linkLabel:        "Download Documentation",
      secondaryLink:      "../Documents/Proxmox_VMWare_Snapshots_Templates_Presentation.pdf",
      secondaryLinkLabel: "Download Presentation",
      status:           "complete",
      date:             "22/06/2026",
      featured:         true
    },
    {
      id:               "rockstor-nas",
      title:            "Server Installation with Rockstor NAS and hardware RAID",
      description:      "Documentation and installation of a server and installing Rockstor NAS system.",
      fullDescription:  "This project involved researching and setting up a server from scratch, using resources supplied to us. \n" +
                        "It involved installing hardware components into a server case, documenting the process, and possible issues that were encountered. \n" +
                        "Additionally, a hardware RAID configuration was set up to provide redundancy and data protection. \n" +
                        "The server was then configured to run Rockstor NAS system, which provides a web interface for managing storage and RAID configurations. \n" +
                        "The project was documented in a report and a presentation was given to demonstrate the software RAID configuration and the Rockstor NAS system. \n\n" +
                        "Final Grade : 16/20",
      reflection:       "This project was an amazing learning experience. I learned a lot about server hardware, RAID configurations, and accessing storages over the network. " +
                        "I'm happy with the result and the knowledge I gained from this project.",
      image:            "../images/rockstor-logo.png",
      tech:             ["Server Hardware", "Server Configuration", "Linux", "School Project"],
      extraTech:        ["Storage Management", "Research", "Documentation"],
      link:             "../Documents/Rockstor_Installation_Documentation.pdf",
      linkLabel:        "Download Documentation",
      secondaryLink:      "../Documents/RockstorNAS_Presentation.pdf",
      secondaryLinkLabel: "Download Presentation",
      status:           "complete",
      date:             "13/04/2026",
      featured:         true
    },
    {
      id:               "vpn-setup",
      title:            "Windows Server 2022 VPN & DirectAccess Setup",
      description:      "Implementation and configuration of VPN and DirectAccess services on Windows Server 2022.",
      fullDescription:  "This project involved setting up and configuring VPN and DirectAccess services on a Windows Server 2022 environment. " +
                        "The goal was to provide secure remote access to the organization's network. \n\n " +
                        "This project was done with another student as part of a school group project. " +
                        "We worked together to research, configure, and document the setup process. \n\n " +
                        "Final Grade : 6.3/8",
      reflection:       "This project went really well, with only some mistakes in the setup of the network between the virtual machines. " +
                         "Overall it was a great learning experience and I'm happy with the result.",
      image:            "../images/windows_server.jpg",
      tech:             ["Windows Server 2022", "Server Configuration","School Project"],
      extraTech:        ["VPN", "DirectAccess", "Research", "Documentation"],
      link:             "../Documents/WindowsVPNProjectDocumentation.pdf",
      linkLabel:        "Download Documentation",
      status:           "complete",
      date:             "14/01/2026",
      featured:         false
    },
    {
      id:               "spinning-project",
      title:            "Relai pour la Vie : Spinning - Monitor frontend",
      description:      "A project for the \"Relai pour la vie\" for the LGK. We were responsible for creating the frontend for monitoring the spinning of the bikes, shown on the beamer and online leaderboard.",
      fullDescription:  "This project was a group project among our class, using all types of technologies, hardware, backend and administration. \n" +
                        "The part I was responsible with another teammate was creating a frontend screen which showed the statistics of the bikes and which student is currently using which bike. \n" +
                        "This frontend was all using data from the backend given to us, using SvelteKit as framework for dynamic data.",
      reflection:       "This project was very helpful for me to create distinctions between components of a web application like backend and frontend",
      image:            "../images/SvelteKit-logo.png",
      tech:             ["Web Application", "SvelteKit", "School Project"],
      extraTech:        ["Front-End", "Framework", "GitHub"],
      link:             "https://github.com/biren9/spinning",
      linkLabel:        "View GitHub Repository",
      status:           "wip"
    },
    {
      id:               "steam-viewer",
      title:            "PowerApps & Power Automate - Steam Achievement Viewer",
      description:      "An application built with Power Apps & Power Automate to view Steam achievements for any game.",
      fullDescription:  "This project involved building an application using Power Apps and Power Automate to view Steam achievements for any game. \n" +
                        "Power Automate was used with the Steam API to retrieve data from the Steam platform. \n" +
                        "The data was stored within Dataverse for easy access and management. \n" +
                        "With the application you were able to view all your games in a list and progress of achievements, by clicking on a game you were able to view a list of achievements and their completion status. \n\n" +
                        "The application isn't published due to limitations with the Power Apps environme          nts and slowness of the Power Automate flow.",
      reflection:       "This project was quite fun to work on with the Steam API, however it was frustrating trying to find a way to store the information in a way that was accessible with the resources provided. " +
                        "Overall I'm quite happy with the outcome but would rather not have to deal with Power Apps again.",
      image:            "../images/Powerapps-logo.png",
      tech:             ["Automation", "Power Platform", "API Integration", "School Project"],
      extraTech:        ["Steam API", "Power Automate", "Dataverse", "Power Apps"],
      link:             "../Documents/SteamAchievementViewer.pdf",
      linkLabel:        "Download Presentation",
      date:             "22/01/2026",
      status:           "complete"
    },
    {
      id:               "game-server",
      title:            "Game Server Hosting Web Application",
      description:      "A planned web application that will allow users to host servers for a selection of games.",
      fullDescription:  "This is a work in progress project that aims to create a web application that will allow users to host servers for a selection of games.\n\n" +
                        "The application will allow users to select a game, configure server settings, and deploy a server without needing to manage the services underneath.\n\n" +
                        "The application is being built using Linux Server, Docker, and a Web Application.\n\n" +
                        "The current status of the project is still minimal progress, since I have made it more of a mission to secure my server and plan on how I want to host this application\n" +
                        "It has more developed into a Home Lab project, since I want this server to also host my own applications for my own use and to try out new technologies.",
      reflection:       null,
      image:            null,
      tech:             ["Linux", "Docker", "Web Application", "SvelteKit", "Personal Project"],
      extraTech:        ["Project Management", "Documentation"],
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
        title:       "AWS re:Invent re:Cap 2026 — Arhs Group",
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
        name:        "Arnaud Charlier",
        description: "Held courses and workshops on AWS and Well Architected Framework, showed us the main Elements within AWS and how they function",
        learnings: [
          "AWS' Well Architected Framework",
          "How to manage S3 Buckets and other storage services",
          "AWS workshops to show how to create and manage VPCs, Subnets and gateways",
          "Alot more services, like containers, monitoring and compute within AWS"
        ]   
      },
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
      { name: "Jamey Jager",     topic: "Project Management",    date: "04/06/2026 + 09/06/2026",
        description: "Lectures on how Project Management is done in a professional environment using OKR, KPI, Milestones and GTD" },
      { name: "Alain Hirtzig",    topic: "Quantum Computing",    date: "03/03/2026",
        description: "Introduction to quantum computing principles, applications, and future implications for cloud infrastructure and risks in cybersecurity." },
      { name: "Christian Stemmler", topic: "Cloud Sustainability", date: "06/01/2026",
        description: "Lecture on the environmental impact of cloud computing and how the industry is working towards more sustainable infrastructure." },
      { name: "Yves Schlüter",   topic: "Interview Simulations", date: "04/12/2025",
        description: "Practical session simulating real job interviews, with feedback on communication, technical answers, professional presentation, and CVs and cover letters." },
      { name: "Restena",         topic: "Phishing Defense",      date: "16/12/2025",
        description: "Presentation on phishing attack techniques and how to identify and prevent them." },
      { name: "Fabio Wiethoff",  topic: "Picture yourself",      date: "08/10/2025",
        description: "Lecture on how to present yourself confidently in stance and posture for interviews and presentations. Made our photos for the portfolio." },
    ]
  },

  // ── LEARNING PATH ─────────────────────────────────────────
  // education[]:     formal studies
  //   subjects[]:    semesters — each has a semester label and a courses[] array
  //     courses[]:   { name, description } — individual subjects/modules
  // onlineCourses[]: self-study courses, platforms, etc.
  //   date:          completion date shown top-right of the row (null to hide)
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
            highlights: "Highlight of this semester was learning the fundamentals of the cloud and its tools, additionally learning how to use Windows Server and Linux systems.\n" +
            "We learnt about Cisco networking, computer hardware, how to present yourself professionally, and how to work on projects.\n" + 
            "Also we had some presentations and workshops to improve our soft skills for interviews in English."
          },
          {
            semester: "Semester 2",
            highlights: "Highlight of this semester was working on physical servers and working on projects related to virtualization. Also more in depth knowledge into Cloud systems and actually using these tools we learnt about.\n" +
            "We're learning to be more hands-on and work with real hardware and software. \n" +
            "Further we have gone a lot more in depth in Azure and Virtualisation with Proxmox and VMWare"
          }
          // add more semesters: { semester: "Semester 3", highlights: "..." }
        ]
      }
    ],
    onlineCourses: [
      {
        title:         "AZ-104: Microsoft Azure Administrator Associate",
        platform:      "Pluralsight",
        date:          null,                       // completion date, e.g. "May 2026" (null to hide)
        description:   "Courses covering main Azure administrative components, including VMs, Containers, Web app services. Additionally User management, RBAC and Administrative units. (In Progress)",
        progressImage: "../images/AZ104-progress.png",
        examImage:     null
      },
      {
        title:         "AZ-900: Microsoft Azure Fundamentals",
        platform:      "Pluralsight",
        date:          "26/01/2026",
        description:   "Courses covering Azure fundamentals, including cloud concepts, Azure services and architecture, identity and management, security, deployment, and governance.",
        progressImage: "../images/AZ900-progress.png",   // path to course progress screenshot, e.g. "../images/az900-progress.png"
        examImage:     "../images/AZ900-testexam.png"    // path to exam/test results screenshot, e.g. "../images/az900-exam.png"
      },
      {
        title:         "The System Administrator's Guide to Bash Scripting",
        platform:      "Pluralsight",
        date:          null,
        description:   "Courses covering Bash scripting, including basic commands, file operations, and automation scripts. (In Progress)",
        progressImage: "../images/BASH-progress.png",
        examImage:     null
      },
      {
        title:         "Cloud Computing Fundamentals",
        platform:      "Pluralsight Skill IQ",
        date:          "26/01/2026",
        description:   "Test on my knowledge of cloud computing fundamentals. Score: Proficient Average",
        progressImage: null,
        examImage:     "../images/CCFundamentals-SkillIQ.png"
      },
      // add more courses: { title, platform, description, progressImage, examImage }
    ]
  }

};
