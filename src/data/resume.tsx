import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { FaAws, FaDartLang, FaFlutter, FaGooglePay, FaGooglePlay, FaLinkedin, FaReact } from "react-icons/fa6";
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
    "Cross Platform Mobile App Developer and Open Source Enthusiast pioneering new ways to build apps using cutting-edge technologies.",
  summary:
    "I am Madhav Gupta, a final year Computer Science Engineering Student from India. I love building Mobile Applications that solve real world problems using innovative technologies. I work as a **Full Stack Developer** specialising in delivering quality software, with experience developing **Mobile Applications, Websites, Desktop Applications, and even Embedded Systems**. I am also an avid **Open Source Contributor**, and love giving back to the Community in any way I can.",
  avatarUrl: "/me.jpg",
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
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
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
      href: "https://powerclubglobal.com/",
      location: "Remote (Miami, Florida)",
      title: "Junior Developer",
      logoUrl: "/pcg.png",
      start: "February 2024",
      end: "Present",
      description:
        [
          "**Built YachtMaster App** : Led full-stack development and deployment of yacht chartering application on Apple App Store, implementing advanced Flutter features including Custom Painter, Isolates, and state management solutions (Bloc/Provider)",
          "**Built Pythia RAG Chatbot:** Architected ML-powered internal chatbot using RAG architecture on Azure, improving company information accessibility by 75% and handling 500+ daily queries.",
          "**Developed AlphaGo** : Cross-platform Web3 social networking dApp using Bitcoin DevKit and Esplora RPC, incentivizing crypto conference attendance and later enabling Offline On-Chain Transanctions.",
          "**Architected and developed Alpha Protocol** : Revolutionary decentralized communication protocol using LoRA mesh networks enabling offline Bitcoin transactions and off-grid communication reducing dependency on traditional infrastructure by 100% and demonstrating expertise in cutting-edge blockchain technology"
        ]
    },
    {
      company: "One Stop Tech Solutions",
      href: "https://osts.tech/",
      badges: [],
      location: "Remote (Bangalore, India)",
      title: "Consultant Full Stack Developer",
      logoUrl: "/osts.png",
      start: "January 2024",
      end: "Present",
      description:
        [
          "**Built IoT water tank management system**: End-to-end solution connecting IoT devices with mobile applications for real-time monitoring and control, reducing manual monitoring costs by 60%",
          "**Developed firmware using ESP-IDF**: Industry-standard embedded development for IoT hardware integration with cost-effective scalability",
          "**Created client-side mobile application**: Flutter-based cross-platform app with Firebase backend and AWS S3 integration for data storage and analytics with over 99% uptime and streamlined client onboarding and support"
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
        "**Contributed to Resonate App** with 50+ implemented features and quality improvements, deployed to Google Play Store",
        "**Established CI/CD pipeline**: Set up automated build compilation and deployment to Google Play Internal Testing, reducing deployment time by 75%",
        "**Engineered comprehensive test suite**: Created automated software tests covering 50% of app functionalities using widget and unit testing frameworks, decreasing production bugs by 60%",
        "**Enhanced accessibility features**: Added internationalization support and On Device Transcription functionality improving user inclusivity and experience by 70%",
        "**Optimized search performance**: Migrated from basic database queries to Meilisearch AI-powered search engine, boosting search speed by 60%",
      ],
    },
    {
      company: "TechGropse",
      href: "https://www.techgropse.com/",
      badges: [],
      location: "Hybrid (Noida, India)",
      title: "Node.js Intern",
      logoUrl: "/techgropse.png",
      start: "August 2023",
      end: "February 2024",
      description:
        [
          "**Developed scalable backends**: Built secure, production-ready APIs using Node.js and MongoDB for multiple client applications serving 10,000+ concurrent users with 99.8% uptime",
          "**Implemented CI/CD pipelines**: Established automated deployment workflows reducing deployment time by 70% and ensuring zero-downtime releases",
          "**Collaborated in enterprise environment**: Worked with 5+ cross-functional teams and 15+ developers on large codebases, learning Git workflows and code review processes"
        ]
    },

  ],
  education: [
    {
      school: "Bennett University",
      degree: "Bachelor's of Technology in Computer Science Engineering | 8.42 CGPA",
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
        {
          type: "Source",
          href: "https://github.com/M4dhav/water-saver",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "/hydrosense.mp4",
    },
  ],
  hackathons: [],
  positionsOfResponsibility: [
    {
      organization: "FOSS United Chapter Bennett University",
      position: "Founder and Senior Mentor",
      logoUrl: "/foss.jpg",
      start: "September 2024",
      end: "Present",
      description: [
        "- Co-founded and currently serve as a Senior Mentor, guiding the core team for the 2025-26 tenure.",
        "- Selected and empowered club leads to drive impactful open-source initiatives within the student community.",
        "- Fostered collaboration and innovation, enhancing student engagement and participation in tech projects.",
        "- Developed leadership and mentorship skills while promoting a culture of open-source contributions.",
        "---",
        "Founder and Co-Lead",
        "- Spearheaded the establishment of the FOSS Community at Bennett University, organizing impactful events to enhance the coding culture.",
        "- Collaborated with team members to develop innovative strategies for community engagement and growth.",
        "- Implemented initiatives to promote open-source software development and foster a collaborative learning environment.",
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
      end: "Present",
      description: [
        "- Mentored the AIS Core for the academic year 2025-26, providing guidance on technical and operational challenges.",
        "- Facilitated workshops and training sessions to enhance team skills and knowledge in artificial intelligence.",
        "- Collaborated with diverse teams to foster a culture of innovation and continuous improvement within the society.",
        "---",
        "Reinforcement Team Lead",
        "- Mentor Juniors in ML Projects",
        "- Develop Cutting Edge Reinforcement Learning Projects",
        "- Research in the Reinforcement Learning field"
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
      description: "As Technical Co-Head, led the development initiatives of the club, spearheading the development of multiple functional apps, including a Ride-Share Platform, a Locator service, and an AI Companion. Learnt and taught Juniors how to work with big teams, and use of services like GitHub and Firebase. Guided the juniors on their journey to learning Mobile Development with Flutter. Co-Hosted multiple events throughout the year, including a 5 Day Fullstack Workshop which included sessions on AI/ML, Backend Development and Mobile Development, and acted as Speaker for the session on Mobile Development. Also organised an RTC to facilitate sharing of Entrepreneurial ideas and helped develop the best ideas into real world applications.",
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
