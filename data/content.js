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
    cv:             "Documents/CV.pdf"
  },

  // ── ABOUT ─────────────────────────────────────────────────
  // Add or remove paragraphs as needed.
  about: [
    "I am Donovan Glodt, currently studying for a BTS in Cloud Computing at the LGK (Lycée Guillaume Kroll).",
    "This portfolio showcases all that I have learned on my path and what I have accomplished throughout my studies."
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
  // tech:            MAIN tags — appear in the row AND in the search filter pills
  // extraTech:       EXTRA tags — appear only inside the detail pop-up
  projects: [
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
      tech:             ["Windows Server 2022", "VPN", "DirectAccess"],
      extraTech:        ["Group Project", "Research", "Documentation"],
      link:             "Documents/WindowsVPNProjectDocumentation.pdf",
      linkLabel:        "Download Documentation",
      status:           "complete"
    },
    {
      id:               "steam-viewer",
      title:            "PowerApps & Power Automate — Steam Achievement Viewer",
      description:      "An application built with Power Apps & Power Automate to view Steam achievements for any game.",
      fullDescription:  null,
      reflection:       null,
      tech:             ["Power Apps", "Power Automate", "API Integration"],
      extraTech:        ["Steam API"],
      link:             "Documents/SteamAchievementViewer.pdf",
      linkLabel:        "Download Presentation",
      status:           "complete"
    },
    {
      id:               "log-analyser",
      title:            "Python Log Analyser",
      description:      "A Python script to analyse Minecraft server logs — tracks user authentication, logins, and logouts.",
      fullDescription:  null,
      reflection:       null,
      tech:             ["Python"],
      extraTech:        [],
      link:             null,
      linkLabel:        null,
      status:           "complete"
    },
    {
      id:               "game-server",
      title:            "Game Server Hosting Web Application",
      description:      "A planned web application that will allow users to host servers for a selection of games.",
      fullDescription:  null,
      reflection:       null,
      tech:             ["Linux Server", "Docker", "Web Application"],
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
      pdf:         "Documents/Azure_AZ-900.pdf",
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
      pdf:         "Documents/Microsoft_Word_Expert.pdf",
      priority:    true
    },
    {
      title:       "Microsoft Office Specialist: PowerPoint Associate",
      issuer:      "Microsoft Office",
      badge:       "https://images.credly.com/size/340x340/images/48efb29e-31ed-414f-899e-088197b10be7/image.png",
      credlyLink:  "https://www.credly.com/badges/d85e653d-e46a-4374-a8ef-0e541230dd33/public_url",
      pdf:         "Documents/Microsoft_Powerpoint_Associate.pdf",
      priority:    false
    },
    {
      title:       "Microsoft Office Specialist: Word Associate",
      issuer:      "Microsoft Office",
      badge:       "https://images.credly.com/size/340x340/images/323ec4a8-7d1f-486f-9c68-258947965b8e/image.png",
      credlyLink:  "https://www.credly.com/badges/d729030b-1bd6-4534-bebc-2778d39b051a/public_url",
      pdf:         "Documents/Microsoft_Word_Associate.pdf",
      priority:    false
    },
    {
      title:       "Microsoft Office Specialist: Excel Associate (Office 2019)",
      issuer:      "Microsoft Office",
      badge:       "https://images.credly.com/size/340x340/images/9d2bcbe6-519f-4ed0-ad34-aca077421568/MOS_Excel.png",
      credlyLink:  "https://www.credly.com/badges/1945ba57-862a-4821-8ea5-7ebbb7cd7681/public_url",
      pdf:         "Documents/Microsoft_Excel_Associate.pdf",
      priority:    false
    }
  ],

  // ── WORKSHOPS ─────────────────────────────────────────────
  workshops: [
    {
      title:       "Datacentre Visit — LuxConnect",
      description: "Site visit to understand datacentre operations and infrastructure.",
      link:        "old/pages/workshops.html"
    },
    {
      title:       "AZ - 040 PowerShell",
      description: "A week-long workshop on PowerShell scripting and automation for Windows administration.",
      link:        "old/pages/workshops.html"
    },
    {
      title:       "External Speakers",
      description: "Lectures from external speakers on a variety of topics.",
      link:        "old/pages/workshops.html"
    }
  ],

  // ── EDUCATION ─────────────────────────────────────────────
  education: [
    {
      school:   "Lycée Guillaume Kroll",
      degree:   "BTS — Cloud Computing",
      years:    "2025 – Present",
      location: "Luxembourg"
    },
    {
      school:   "Pluralsight Courses",
      degree:   "Cloud Computing & IT Courses",
      years:    "During studies",
      location: "Online"
    }
  ]

};
