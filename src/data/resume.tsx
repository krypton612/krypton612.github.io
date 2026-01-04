import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, ShieldCheckIcon } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon, LockClosedIcon, RotateCounterClockwiseIcon, StarFilledIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { 
  GithubOriginalIcon, 
  GithubOriginalWordmarkIcon, 
  TypescriptPlainIcon,
  ReactOriginalIcon,
  GoOriginalIcon,
  PythonPlainIcon,
  JavascriptPlainIcon,
  NextjsOriginalIcon,
  GitPlainIcon,
  DockerPlainIcon,
  CloudflarePlainIcon,
  PhpPlainIcon,
  LaravelOriginalIcon,
  MysqlOriginalIcon,
  PostgresqlPlainIcon,
  AndroidstudioPlainIcon,
  JavaPlainIcon,
  BashPlainIcon,
  Windows11OriginalIcon,
  LinuxPlainIcon,
  LinuxOriginalIcon,
  GradleOriginalIcon,
  AndroidOriginalIcon,
  DockerOriginalIcon,
  DockerPlainWordmarkIcon
} from "@devicon/react";


export const DATA = {
  name: "Ronald Diaz",
  initials: "RD",
  url: "https://krypton612.github.io/",
  location: "Cochabamba, BO",
  locationLink: "https://www.google.com/maps/place/cochabamba",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    "At the end of 2025, after completing my degree in Systems Engineering, I decided to focus full-time on building my own projects. I gained hands-on experience during my internships at the [Military Engineering School and 2 years at UTIC](https://www.emi.edu.bo/), and I’m also a [Second Lieutenant in the reserve](https://www.ejercito.mil.bo/), applying discipline and leadership to every project I tackle. Now, I’m leveraging this experience to create scalable solutions, explore innovative ideas, and push the limits of what I can build remotely.",
  avatarUrl: "/me.png",
  skills: [
    { name: "JavaScript", level: 3, category: "Languages", icon:  JavascriptPlainIcon},
    { name: "Python", level: 4, category: "Languages", icon: PythonPlainIcon },
    { name: "Go", level: 4, category: "Languages", icon: GoOriginalIcon },
    { name: "React", level: 5, category: "Frameworks", icon: ReactOriginalIcon },
    { name: "Next.js", level: 5, category: "Frameworks", icon: NextjsOriginalIcon },
    { name: "Git", level: 5, category: "Tools", icon: GitPlainIcon },
    { name: "GitHub", level: 5, category: "Tools", icon: GithubOriginalIcon },
    { name: "CI/CD", level: 4, category: "Tools", icon: RotateCounterClockwiseIcon },
    { name: "Docker", level: 4, category: "Tools", icon: DockerPlainIcon },
    { name: "TypeScript", level: 5, category: "Languages", icon: TypescriptPlainIcon },
    { name: "Cloudflare", level: 4, category: "Tools", icon: CloudflarePlainIcon },
    { name: "PHP", level: 5, category: "Languages", icon: PhpPlainIcon },
    { name: "Laravel", level: 5, category: "Frameworks", icon: LaravelOriginalIcon },
    { name: "MySQL", level: 4, category: "Databases", icon: MysqlOriginalIcon },
    { name: "PostgreSQL", level: 4, category: "Databases", icon: PostgresqlPlainIcon },
    { name: "Android Studio", level: 5, category: "Tools", icon: AndroidstudioPlainIcon },
    { name: "Java", level: 5, category: "Languages", icon: JavaPlainIcon },
    { name: "Bash", level: 4, category: "Languages", icon: BashPlainIcon },
    { name: "Windows", level: 4, category: "Tools", icon: Windows11OriginalIcon },
    { name: "Linux", level: 5, category: "Tools", icon: LinuxOriginalIcon },
    { name: "Gradle", level: 4, category: "Tools", icon: GradleOriginalIcon },
    { name: "Play Store", level: 4, category: "Tools", icon: AndroidOriginalIcon },
    { name: "Drawio", level: 5, category: "Tools", icon: Icons.drawio },
    { name: "Blockchain Geth", level: 3, category: "Tools", icon: Icons.ethereum },
    { name: "Ofensive Security", level: 5, category: "Skills", icon: ShieldCheckIcon },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ronalddiazy@gmail.com",
    tel: "+591 707-12345",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/krypton612",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ronald-diaz-069416246/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/end_terminal",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@theendofmybeautifultermina677",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:ronalddiazy@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Military Engineering School",
      href: "https://www.emi.edu.bo",
      badges: [
      ],
      location: "Remote",
      title: "Computer Security Incident Response Team",
      logoUrl: "/emi.jpg",
      start: "May 2023",
      end: "July 2025",
      description:
        "Monitored and responded to cybersecurity incidents, performing threat analysis, vulnerability assessments, and system audits. Developed internal tools to automate incident response workflows and improve security monitoring. Collaborated with cross-functional teams to implement best practices and secure critical infrastructure.",
    },
    {
      company: "Military Engineering School",
      badges: [],
      href: "https://www.emi.edu.bo",
      location: "Remote",
      title: "Project Engineer Intern",
      logoUrl: "/emi.jpg",
      start: "January 2022",
      end: "April 2023",
      description:
        "Worked on system security improvements and maintenance for internal applications and infrastructure. Implemented scripts and tools in Go to automate security checks, database failover procedures, and ensure consistency across critical systems. Collaborated with senior engineers to detect vulnerabilities and apply corrective measures, strengthening overall system reliability and security.",
    },

    {
      company: "Military Engineering School",
      badges: [],
      href: "https://www.emi.edu.bo",
      location: "Remote",
      title: "University Internship Program",
      logoUrl: "/emi.jpg",
      start: "February 2024",
      end: "July 2024",
      description:
        "Installed and configured a network of 64 security cameras, ensuring proper coverage and functionality across the facility. Managed switches, Cisco routers, and network configurations to maintain stable and secure connections. Assisted in troubleshooting and maintaining the security infrastructure, gaining hands-on experience in network management and surveillance systems.",
    },
    {
      company: "Emanuel Montessori School",
      href: "https://www.montessori.com.bo/",
      badges: [],
      location: "Cochabamba, BO",
      title: "Senior Software Engineer",
      logoUrl: "/montessori.png",
      start: "November 2025",
      end: "Present",
      description:
        "Designing and building the school’s digital infrastructure from scratch, including CI/CD pipelines, databases, and administrative and student management systems. Developed internal dashboards and tools using **React, Redux, TypeScript, and Python**, ensuring scalable, efficient, and secure solutions for the entire organization.",
    },
  ],
  education: [
    {
      school: "Army language school",
      href: "http://escueladeidiomasejto.com/",
      degree: "a1, a2, b1, b2, b2+",
      logoUrl: "/ie.png",
      start: "2020",
      end: "2025",
    },
    {
      school: "Military Engineering School",
      href: "https://www.emi.edu.bo",
      degree: "Bachelor's Degree in Systems Engineering",
      logoUrl: "/emi.jpg",
      start: "2019",
      end: "2025",
    },
    {
      school: "Military Engineering School",
      href: "https://www.emi.edu.bo",
      degree: "Science and Art of Land Military",
      logoUrl: "/emi.jpg",
      start: "2020",
      end: "2025",
    }
  ],
  projects: [
    {
      title: "Voto Electrónico",
      href: "https://www.votaciones.com.bo",
      dates: "May 2025 - June 2025",
      active: true,
      description:
        "Electronic voting system for secure and auditable elections, using [MetaMask for voter authentication](https://metamask.io/) and cryptographic signing, with votes immutably recorded via Ethereum smart contracts. Ensures integrity, transparency, and non-repudiation, and includes an administrative backend deployed.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "TailwindCSS",
        "Shadcn UI",
        'Getch Ethereum',
        "Smart Contracts",
        "Cloudflare",
        'Java Spring Boot',
        'Laravel',
        'FilamentPHP',
        'Metamask SDK',
        'Git Flow',
        'Github'
      ],
      links: [
        {
          type: "Website",
          href: "https://www.votaciones.com.bo",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/orgs/socies-emi-uat/repositories?q=eleccion",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "videos/preview-voto.mp4",
    },
    {
      title: "Entrerios App",
      href: "#",
      dates: "June 2023 - December 2023",
      active: true,
      description:
        "Real-time Android application built with Java and Firebase, featuring synchronized data and animated UI components.",
      technologies: [
        "Java",
        "Android Studio",
        "Firebase",
        "Firebase Realtime Database",
        "Lottie Animations",
        "XML Design",
        'Git'
      ],
      links: [
      {
        type: "Private",
        href: "#",
        icon: <LockClosedIcon className="size-3" />,
      },
    ],
      image: "/images/grid-entrerios.png",
      video: "",
    },
    {
      title: "Animal Clinic Management",
      href: "#",
      dates: "April 2022 - October 2022",
      active: true,
      description:
        "Desktop management system for veterinary clinics, handling patient records, appointments, billing, and real-time data synchronization with a MySQL backend.",
      technologies: [
        "Java",
        "Java FX",
        "Python Flask",
        "Retrofit",
        "MySQL",
        'Git'
      ],
      links: [
        {
          type: "Private",
          href: "#",
          icon: <LockClosedIcon className="size-3" />,
        }
      ],
      image: "/images/veterinary.png",
      video:
        "",
    },
    {
      title: "Honey-OS",
      href: "https://github.com/krypton612/HoneyOS",
      dates: "December 2024 - December 2025",
      active: true,
      description:
        "Fork of [T-Pot](https://github.com/telekom-security/tpotce) providing a full-featured logging and analytics platform. Collects and analyzes OpenAI API requests in real time, tracks costs, and helps optimize prompts with Docker-based deployment.",
      technologies: [
        "Docker",
        "Docker Compose",
        "Git",
        "Git Flow",
        "Quartz",
        "Markdown",
      ],
      links: [
        {
          type: "Website Docs",
          href: "https://krypton612.github.io/docs/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/krypton612/HoneyOS",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Docker Image",
          href: "https://github.com/users/krypton612/packages/container/package/honeyos",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/honeyos.png",
      video: "",
    },
    {
      title: "Medical Appointments",
      href: "#",
      dates: "April 2025 - October 2025",
      active: true,
      description:
        "Web app for booking and managing medical appointments with real-time data and secure API integration.",
      technologies: [
        "Next.js",
        "Typescript",
        "MySQL",
        "TailwindCSS",
        "Shadcn UI",
        "Python Flask",
        'Bearer Tokens',
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Private",
          href: "#",
          icon: <LockClosedIcon className="size-3" />,
        }
      ],
      image: "/images/citas-sanjuandedios.png",
      video:
        "",
    },
    {
      title: "Cupe Ticketing System",
      href: "#",
      dates: "January 2025 - October 2025",
      active: true,
      description:
        "Ticketing management system for events, handling ticket sales, reservations, payments, and real-time data synchronization with MySQL and secure APIs.",
      technologies: [
        "Next.js",
        "Typescript",
        "MySQL",
        "TailwindCSS",
        "MUI UI",
        "Java Spring Boot",
        'Bearer Tokens',
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Private",
          href: "#",
          icon: <LockClosedIcon className="size-3" />,
        }
      ],
      image: "/images/cupe-ticket.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Capture The Flag - EMI",
      dates: "November 23rd - 25th, 2023",
      location: "La Paz, BO",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/emi.jpg",
      mlh: "",
      links: [
        {
          title: "Second Individual Place",
          icon: <StarFilledIcon className="h-4 w-4" color="#FFD700" />,
          href: "#",
        },
        {
          title: "Convocation",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.emi.edu.bo/images/convocatorias/CONVOCATORIA%20CIBERSEGURIDAD-1008-24.pdf",
        },
      ],
    },
    {
      title: "Capture The Flag - EMI",
      dates: "November 20th - 23rd, 2024",
      location: "La Paz, BO",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/emi.jpg",
      mlh: "",
      links: [
        {
          title: "First Individual Place",
          icon: <StarFilledIcon className="h-4 w-4" color="#FFD700" />,
          href: "#",
        },
        {
          title: "Third in teams",
          icon: <StarFilledIcon className="h-4 w-4" color="gray" />,
          href: "#",
        },
        {
          title: "Convocation",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://www.emi.edu.bo/images/convocatorias/CONVOCATORIA%20CIBERSEGURIDAD-1008-24.pdf",
        },
      ],
    },
    {
      title: "Exposcience - EMI",
      dates: "September 23rd - 23rd, 2022",
      location: "Cochabamba, BO",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/emi.jpg",
      mlh: "",
      links: [
        {
          title: "First Individual Place",
          icon: <StarFilledIcon className="h-4 w-4" color="#FFD700" />,
          href: "#",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://asambleacochabamba.gob.bo/2022/09/23/expo-ciencia-tropico-2022/",
        },
      ],
    },
    
  ],
} as const;
