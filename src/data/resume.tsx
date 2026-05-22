import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { FaApple, FaAws, FaDartLang, FaFlutter, FaGlobe, FaGoogle, FaGooglePay, FaGooglePlay, FaGoogleScholar, FaLinkedin, FaReact, FaWebAwesome } from "react-icons/fa6";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { SiAmazonsqs, SiAppwrite, SiDocker, SiExpress, SiFirebase, SiGit, SiGooglecloud, SiGraphql, SiKeras, SiKotlin, SiMongodb, SiMysql, SiPython, SiSwift, SiTensorflow } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { DiDart } from "react-icons/di";





export const DATA = {
  name: "Madhav Gupta",
  initials: "MG",
  url: "https://dillion.io", //TBD
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "Product Engineer and Open Source Contributor building scalable full-stack systems across mobile, web, cloud, AI, and embedded ecosystems.",
  summary:
    "I am Madhav Gupta, a Product Engineer and Open Source Contributor passionate about building technology that solves real-world problems at scale. My work spans Full-Stack Product Development across **Mobile** Applications, **Web** platforms, **Backend** systems, **AI-powered workflows**, **Distributed Infrastructure**, and **Embedded Systems.** I enjoy working across the entire product lifecycle — from architecture and system design to deployment and optimization — with a strong focus on developer experience, performance, and usability. Alongside engineering products, I actively contribute to **open-source communities** and **mentor contributors** across diverse technology stacks.", avatarUrl: "/me.jpg",
  skills: [
    {
      name: "Next.js",
      icon: <Icons.nextjs className="size-3" />,
    },
    {
      name: "React, React Native",
      icon: <Icons.react className="size-3" />,
    },
    {
      name: "Typescript",
      icon: <Icons.typescript className="size-3" />,
    },
    {
      name: "Python",
      icon: <SiPython className="size-3" />,
    },
    {
      name: "Flutter",
      icon: <FaFlutter className="size-3" />,
    },
    {
      name: "Dart",
      icon: <FaDartLang className="size-3" />,
    },
    {
      name: "Kotlin",
      icon: <SiKotlin className="size-3" />,
    },
    {
      name: "Swift",
      icon: <SiSwift className="size-3" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress className="size-3" />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase className="size-3" />,
    },
    {
      name: "Appwrite"
      , icon: <SiAppwrite className="size-3" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="size-3" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="size-3" />,
    },
    {
      name: "Azure",
      icon: <VscAzure className="size-3" />,
    },
    {
      name: "AWS",
      icon: <FaAws className="size-3" />,
    },
    {
      name: "GCP",
      icon: <SiGooglecloud className="size-3" />,
    },
    {
      name: "Docker",
      icon: <SiDocker className="size-3" />,
    },
    {
      name: "Git",
      icon: <SiGit className="size-3" />,
    },
    {
      name: "TensorFlow",
      icon: <SiTensorflow className="size-3" />,
    },
    // {
    //   name: "Keras",
    //   icon: <SiKeras className="size-3" />,
    // },

  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "madhav.gupta7674@gmail.com",
    tel: "+917658008316",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/M4dhav",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/M4dhav",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/M4dhav1",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [

    {
      company: "PowerClub Global",
      badges: [],
      location: "Remote (Miami, Florida)",
      title: "Senior Engineer",
      logoUrl: "/pcg-t.png",
      logoBackground: "black",
      start: "February 2024",
      end: "Present",
      description: [
        "- Contributed as a core engineer to Orcha, an *AI-native product management platform* built with React, TSX, Rust, and multi-agent AI systems, enabling *autonomous agents* to execute workflows including software development, market research, media generation, meeting transcription, and intelligent task orchestration within collaborative Kanban environments.",
        "- *Promoted to Senior Engineer* in Jan 2026 after a large period of impactful contributions across the product stack, demonstrating leadership in scalable architecture design, cross-functional collaboration, and mentorship within a fast-paced startup environment.",
        "---",
        "*Junior Developer*",
        "- Led end-to-end development and deployment of YachtMaster, a production-grade *yacht chartering platform* released on the Apple App Store, by architecting scalable Flutter systems, performance-optimized rendering pipelines, and modular application workflows.",
        "- Architected Pythia, an enterprise *Retrieval-Augmented Generation (RAG) chatbot* on *Azure*, improving internal knowledge accessibility by 75% and supporting 500+ daily organizational queries through contextual retrieval and LLM-powered workflows.",
        "- Built AlphaGo, a cross-platform *Web3 social networking platform* integrating Bitcoin DevKit and Esplora RPC, enabling *blockchain-native social interactions*, *crypto event engagement systems*, and *offline-capable on-chain transaction* workflows.",
        "- Engineered Alpha Protocol, a *decentralized LoRa mesh communication system* enabling *off-grid messaging* and *offline Bitcoin transaction* relays without reliance on traditional internet infrastructure.",
        "- Worked across *mobile, backend, AI, infrastructure, and distributed systems engineering*, contributing to *scalable architecture design, developer tooling, CI/CD automation, and rapid product iteration* within a remote startup environment."
      ],
      links: [
        {
          type: "Website",
          href: "https://powerclubglobal.com/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "YachtMaster App",
          href: "https://apps.apple.com/us/app/yachtmaster-app/id6449384419",
          icon: <FaApple className="size-3" />, // Or any icon you like
        },

      ]
    },
    {
      company: "One Stop Tech Solutions",

      badges: [],
      location: "Remote (Bangalore, India)",
      title: "Consultant Product Engineer",
      logoUrl: "/osts.png",
      start: "January 2024",
      end: "Present",
      description: [
        "- Built an end-to-end *IoT water tank management platform* integrating embedded devices, cloud infrastructure, and cross-platform applications for *real-time monitoring, automation, and operational analytics*, reducing manual monitoring costs by 60%.",
        "- Developed production-grade firmware using ESP-IDF and C++ for scalable IoT hardware deployments, enabling reliable device communication, telemetry collection, and low-cost infrastructure expansion.",
        "- Engineered a cross-platform client application using *Flutter*, *Firebase*, and *AWS S3* with 99% uptime, enabling real-time device management, analytics visualization, onboarding workflows, and remote operational support.",
        "- Worked across *embedded systems, backend services, cloud infrastructure, and frontend application layers* to deliver *fully integrated IoT solutions* for production environments."
      ],
      links: [
        {
          type: "Website",
          href: "https://ostsol.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ]
    },
    {
      company: "Google Summer of Code",
      href: "https://summerofcode.withgoogle.com/archive/2025/projects/txbphR3y",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/gsoc-pin.png",
      start: "May 2025",
      end: "October 2025",
      description: [
        "- Contributed to *Resonate*, an open-source social voice platform, by delivering *50+ features, platform improvements, and developer tooling enhancements* across mobile architecture, UX, and infrastructure systems.",
        "- Engineered automated *CI/CD pipelines* using *GitHub Actions* and Google Play Internal Testing workflows, reducing deployment turnaround time by 75% and streamlining release management.",
        "- Built a comprehensive automated testing framework with *widget and unit tests* covering critical application workflows, reducing production regressions and significantly improving release stability.",
        "- Improved platform accessibility and global usability by implementing *internationalization (i18n)* and *on-device speech transcription* capabilities for real-time voice interactions.",
        "- Optimized application search architecture by migrating from conventional database querying to *Meilisearch-powered indexing and retrieval systems*, improving search performance and scalability by 60%.",
        "- Collaborated within a distributed open-source engineering environment involving *code reviews*, *feature planning*, *issue triaging*, and *iterative product development* alongside global contributors and maintainers."
      ],
      links: [
        {
          type: "Project Details",
          href: "https://summerofcode.withgoogle.com/archive/2025/projects/txbphR3y",
          icon: <FaGoogle className="size-3" />,
        },
        {
          type: "Resonate App",
          href: "https://play.google.com/store/apps/details?id=com.resonate.resonate&hl=en",
          icon: <FaGooglePlay className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AOSSIE-Org/Resonate",
          icon: <Icons.github className="size-3" />,
        },
      ]
    },
    {
      company: "TechGropse",
      badges: [],
      location: "Hybrid (Noida, India)",
      title: "Backend Engineering Intern",
      logoUrl: "/techgropse.png",
      start: "August 2023",
      end: "February 2024",
      description: [
        "- Built secure and scalable *Node.js* and *MongoDB* backend systems for multiple production applications supporting *10,000+ concurrent users* with *99.8% uptime*.",
        "- Designed and integrated production-ready *REST APIs*, authentication workflows, and database architectures for *high-traffic client applications* across diverse business domains.",
        "- Implemented automated *CI/CD pipelines* and deployment workflows, reducing release turnaround time by 70% while enabling reliable zero-downtime deployments.",
        "- Collaborated across *5+ cross-functional teams* and large shared codebases using enterprise Git workflows, peer reviews, agile development practices, and iterative release cycles.",
        "- Gained hands-on experience working within production engineering environments involving *scalable backend architecture*, *deployment automation*, *debugging*, and *performance optimization*."
      ],
      links: [
        {
          type: "Website",
          href: "https://techgropse.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ]
    },

  ],
  education: [
    {
      school: "Bennett University",
      degree: "Bachelor's of Technology in Computer Science Engineering | 8.55 CGPA",
      logoUrl: "/bennett-univ.png",
      start: "2022",
      end: "2026",
    },
    {
      school: "Guru Nanak Public School",
      degree: "Senior Secondary (CBSE) | XII - 84.8%",
      logoUrl: "/gnps.png",
      start: "2020",
      end: "2022",
    },
    {
      school: "The Gurukul",
      degree: "Senior Secondary (CBSE) | X - 93.4%",
      logoUrl: "/gurukul.jpg",
      start: "2018",
      end: "2020",
    },

  ],
  projects: [
    {
      title: "Resonate",
      href: "https://play.google.com/store/apps/details?id=com.resonate.resonate&hl=en",
      dates: "May 2025 - October 2025",
      active: true,
      description:
        "An Open Source Social Voice Platform designed to foster authentic audio conversations and communities. As part of my [GSoC '25 Project](https://summerofcode.withgoogle.com/archive/2025/projects/txbphR3y), I added multiple developer and user oriented features to the application, like internationalization, Automated tests, AI Enabled semantic search, On-device Audio Transcription, and much more.",
      technologies: [
        "Flutter",
        "Appwrite",
        "LiveKit",
        "Docker",
        "OpenAI Whisper",
        "GetX",
        "Firebase Messaging",
        "Meilisearch",
      ],
      links: [
        {
          type: "Google Play Store",
          href: "https://play.google.com/store/apps/details?id=com.resonate.resonate&hl=en",
          icon: <FaGooglePlay className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AOSSIE-Org/Resonate",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/resonate.png",
      video: "",
    },

    {
      title: "YachtMaster App",
      href: "https://apps.apple.com/in/app/yachtmaster-app/id6449384419",
      dates: "February 2024 - Present",
      active: true,
      description:
        "Easy to use cross platform application for chartering yachts around the world. Allows users to host, find and book charters and other experiences, and supports a wide variety of payment methods. I led the development of this application as part of my role at PowerClub Global. Now, I am responsible for upkeep and occasional bugfixes/ feature implementations in the application.",
      technologies: [
        "Flutter",
        "Firebase",
        "Stripe",
        "GetX",
        "Provider",
        "Bloc",
      ],
      links: [
        {
          type: "Apple App Store",
          href: "https://apps.apple.com/in/app/yachtmaster-app/id6449384419",
          icon: <IoLogoAppleAppstore className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Powerclub-Global/YachtMaster-App.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/yma.mp4",
    },
    {
      title: "meshtastic flutter",
      href: "https://pub.dev/packages/meshtastic_flutter",
      dates: "July 2025 - August 2025",
      active: true,
      description:
        `A  comprehensive Flutter package that enables direct communication with Meshtastic devices over Bluetooth Low Energy
(BLE), implementing the full [Meshtastic](https://meshtastic.org/) protocol. Provides advanced mesh networking capability with
simple strongly typed APIs.`,
      technologies: [
        "Dart",
        "Flutter",
        "Bluetooth Low Energy (BLE)",
        "Protobuf",
        "Meshtastic Protocol",

      ],
      links: [
        {
          type: "pub.dev",
          href: "https://pub.dev/packages/meshtastic_flutter",
          icon: <DiDart className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/M4dhav/meshtastic_flutter",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/meshtasticflutter.jpg",
      video:
        "",
    },

    {
      title: "HydroSense",
      href: "https://github.com/M4dhav/water-saver",
      dates: "January 2024 - Present",
      active: true,
      description:
        "As part of my role at One Stop Tech Solutions, I am leading the development of HydroSense, a cross platform application to **monitor and manage water tanks remotely** using IoT technology. The application connects to **custom built IoT devices** using **ESP32 microcontrollers**, allowing users to monitor water levels, control pumps, and receive alerts in real time.",
      technologies: [
        "Flutter",
        "Firebase",
        "Riverpod",
        "ESP-IDF",
        "AWS S3",
        "MQTT Protocol",
        "ESP SmartConfig",
      ],
      links: [
        // {
        //   type: "Source",
        //   href: "https://github.com/M4dhav/water-saver",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "",
      video:
        "/hydrosense.mp4",
    },
  ],
  hackathons: [],
  positionsOfResponsibility: [
    {
      organization: "AOSSIE",
      position: "Google Summer of Code Organization Administrator and Project Mentor",
      logoUrl: "/aossie.png",
      start: "November 2025",
      end: "Present",
      description: [
        "- Promoted to serve as a *Google Summer of Code Organization Administrator*, overseeing contributor onboarding, mentor coordination, project evaluations, and program execution across multiple open-source initiatives.",
        "- Mentoring *6 student contributors* across diverse projects and technology stacks, providing guidance on software architecture, development workflows, debugging, code reviews, and open-source collaboration practices.",
        "- Coordinated communication and collaboration between global contributors, maintainers, and mentors within distributed engineering teams to ensure successful project delivery and contributor growth.",
        "- Assisted in streamlining contributor workflows, documentation standards, and evaluation processes to improve onboarding efficiency and community engagement.",
        "- Fostered a collaborative open-source culture by supporting contributors throughout the development lifecycle, from ideation and planning to implementation and deployment.",
        "---",
        "*Project Mentor and Open Source Contributor*",
        "- Contributed to multiple open-source initiatives under **AOSSIE**, collaborating with international contributors and maintainers on scalable production-grade systems and developer tooling.",
        "- Conducted technical mentorship sessions and architectural reviews while helping contributors navigate large codebases, issue tracking systems, and collaborative development environments.",
        "- Helped strengthen community participation and contributor retention by promoting knowledge sharing, peer collaboration, and open-source best practices."
      ],
      links: [
        {
          type: "Website",
          href: "https://aossie.org/",
          icon: <FaGlobe className="size-3" />,
        },
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/company/aossie/",
          icon: <FaLinkedin className="size-3" />,
        },
      ]
    },
    {
      organization: "FOSS United Chapter Bennett University",
      position: "Founder and Senior Mentor",
      logoUrl: "/foss.jpg",
      start: "September 2024",
      end: "May 2026",
      description: [
        "- *Mentored the core team for the 2025-26 tenure*, empowering student leads to organize technical initiatives, workshops, hackathons, and community-driven development programs.",
        "---",
        "*Co-Lead*",
        "- Co-founded the *FOSS United Bennett University Chapter* and *led the Core Team for the 2024-25 tenure*, helping to scale it into an active open-source community focused on engineering collaboration, developer growth, and hands-on learning.",
        "- Fostered a strong culture of *open-source contribution and peer mentorship* by guiding students across Git workflows, collaborative development practices, project architecture, and community engagement.",
        "- Organized and supported technical events focused on modern development ecosystems including *open-source tooling, DevOps, AI, Linux, and full-stack engineering workflows.*",
        "- Collaborated with contributors, organizers, and external communities to improve participation in open-source programs, hackathons, and real-world engineering projects.",
        "- Designed community engagement strategies and collaborative programs that increased student participation in open-source software development and engineering-focused learning environments.",
        "- Worked closely with organizers and contributors to cultivate a sustainable ecosystem centered around knowledge sharing, innovation, and real-world product building."
      ],
      links: [
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/company/104854044/",
          icon: <FaLinkedin className="size-3" />,
        },
      ]
    },
    {
      organization: "Artificial Intelligence Society Bennett University",
      position: "Senior Mentor",
      logoUrl: "/ais.jpg",
      start: "August 2024",
      end: "May 2026",
      description: [
        "- *Mentored the AIS core team for the 2025-26 tenure*, providing technical guidance across AI/ML systems, project architecture, research workflows, and operational planning.",
        "- Collaborated with multidisciplinary student teams to foster a culture of innovation, experimentation, and research-driven product development within the society.",
        "- Supported contributors in building real-world AI projects by assisting with *model development, experimentation pipelines, deployment strategies, and engineering best practices.*",
        "---",
        "*Reinforcement Learning Team Lead*",
        "- *Led the Reinforcement Learning division* by mentoring junior contributors on research methodologies, experimentation workflows, and scalable ML project development.",
        "- Conducted workshops, technical sessions, and mentorship programs focused on *modern AI engineering practices including machine learning, deep learning, reinforcement learning, and applied AI systems.*",
        "- Worked on *cutting-edge reinforcement learning systems* involving intelligent agents, decision-making models, simulation environments, and autonomous learning architectures.",
        "- Conducted research and exploratory development in the field of *Reinforcement Learning*, focusing on practical AI applications and emerging methodologies."
      ],
      links: [
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/company/78124600/",
          icon: <FaLinkedin className="size-3" />,
        },
      ]
    },
    {
      organization: "Mobilon",
      position: "Technical Team Co-Lead",
      logoUrl: "/mobilon.jpg",
      start: "September 2023",
      end: "July 2024",
      description: [
        "- Led technical initiatives for the club by overseeing the development of multiple production-oriented applications including a *ride-sharing platform, location services platform, and AI-powered companion system*.",
        "- Mentored junior developers on *Flutter, Firebase, GitHub workflows, collaborative development practices, and scalable application architecture* within large team environments.",
        "- Coordinated engineering efforts across multiple student-led projects, helping contributors transition ideas from prototypes into deployable real-world applications.",
        "- Co-hosted and organized technical events, workshops, and community sessions focused on *full-stack engineering, AI/ML systems, backend development, and cross-platform application development*.",
        "- Delivered technical sessions as a speaker during a *5-day Full Stack Development Workshop*, conducting hands-on sessions focused on mobile application engineering and modern development workflows.",
        "- Organized and facilitated an RTC (Round Table Conference) focused on startup ideation and product innovation, helping teams refine concepts and transform them into executable technical solutions."
      ],
      links: [
        {
          type: "LinkedIn",
          href: "https://www.linkedin.com/company/98649932/",
          icon: <FaLinkedin className="size-3" />,
        },
      ]
    },

  ],
} as const;
