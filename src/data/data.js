import {FaCss3, FaHtml5, FaJs, FaReact} from "react-icons/fa";
import {
    SiTypescript,
    SiTailwindcss,
    SiMongodb,
    SiNextdotjs,
    SiPython,
    SiMysql,
    SiLaravel,
    SiPhp,
    SiFirebase,
    SiSupabase,
    SiHtml5,
    SiGithub,
    SiLinkedin,
    SiInstagram,
    SiCss3,
    SiJavascript,
    SiExpress,
    SiNodedotjs,
} from "react-icons/si";

export const me = [
    {
        name: "Reinhard Dave Yunardi",
        description: "I am currently in high school",
    },
];

export const goal = [
    {
        title: "Full-stack web developer",
        description: "",
    },
    {
        title: "Front-end app developer",
        description: "",
    },
    {
        title: "Other",
        description: "Learn some framework, runtime, programming languages",
        item: [
            {
                name: "Laravel",
                icon: <SiLaravel color="#f9322c" />,
            },
        ],
    },
];

export const links = [
    {
        name: "Github",
        url: "https://github.com/reinharddaveyunardi",
        icon: <SiGithub />,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/reinhard-dave-yunardi",
        icon: <SiLinkedin />,
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/itsme.xell/",
        icon: <SiInstagram />,
    },
];

export const projects = [
    {
        prevImg: "/projects/viiia.png",
        name: "Class 8A Website",
        production: "Production: 17 May 2023",
        description:
            "I made the 8A class website with basic HTML, CSS and JavaScript. This website is the first website I created. I created this website by following a tutorial on YouTube called WPUNPAS or Web Programming UNPAS",
        url: "https://kelas8a.pages.dev",
        icons: [
            <SiHtml5 color="#E46947" />,
            <SiCss3 color="#0EA5E9" />,
            <SiJavascript color="#F0DB4F" />,
        ],
    },
    {
        prevImg: "/projects/ixc.png",
        name: "Class 9C Website",
        production: "Production: 1 September 2023",
        description:
            "I made the 9C class web with HTML, Tailwindcss for CSS, and basic JavaScript. This website was created in 2023 to 2024.",
        url: "https://ixc.pages.dev",
        icons: [
            <SiHtml5 color="#E46947" />,
            <SiCss3 color="#0EA5E9" />,
            <SiJavascript color="#F0DB4F" />,
        ],
    },
    {
        prevImg: "/projects/pastnine.png",
        name: "Grade 9 Yearbook",
        theme: "Theme: Dark Academia",
        production: "Production: 11 June 2024",
        description:
            "I made a website for class 9 and this is my biggest project, this website uses the NextJs framework. I also use TypeScript and Tailwindcss. I added a multilingual system with next-intl. This project is a yearbook for our graduation in junior high school.",
        url: "https://pastnine.vercel.app",
        icons: [
            <SiHtml5 color="#E46947" />,
            <SiTailwindcss color="#0EA5E9" />,
            <SiNextdotjs />,
            <SiTypescript color="#3178C6" />,
        ],
    },
    {
        prevImg: "/projects/tenone.png",
        name: "Class 10.1 Website",
        production: "Production: 13 July 2024",
        description:
            "I made a website for class 10.1 this website uses the NextJs framework. I also use TypeScript and Tailwindcss.",
        url: "https://10-1.vercel.app",
        icons: [
            <SiHtml5 color="#E46947" />,
            <SiTailwindcss color="#0EA5E9" />,
            <SiNextdotjs />,
            <SiTypescript color="#3178C6" />,
        ],
    },
];

export const skills = [
    {
        category: "Programming Languages",
        items: [
            {
                name: "HTML",
                level: 5,
                icon: <FaHtml5 size={24} color="#E46947" />,
                description:
                    "In HTML, I have learned the basics of web development.",
                knowledge: [
                    {name: "Basic"},
                    {name: "Element"},
                    {name: "Attribute"},
                    {name: "Headings"},
                    {name: "Paragraph"},
                    {name: "Classes & Id"},
                    {name: "Formatting"},
                    {name: "Tables & Lists"},
                    {name: "Image & Link"},
                ],
            },
            {
                name: "CSS",
                level: 5,
                icon: <FaCss3 size={24} color="#2A8BD1" />,
                description:
                    "In CSS, I have learned the basics of web development on styling.",
                knowledge: [
                    {name: "Syntax"},
                    {name: "Padding & Margin"},
                    {name: "Height & Width"},
                    {name: "Justify & Align"},
                    {name: "Flexbox & Grid"},
                    {name: "Min & Max"},
                    {name: "Media Queries"},
                    {name: "Responsive Design"},
                ],
            },
            {
                name: "JavaScript",
                level: 5,
                icon: <FaJs size={24} color="#F0DB4F" />,
                description: "Currently practicing JavaScript.",
                knowledge: [
                    {name: "Basic"},
                    {name: "Variables & Data Types"},
                    {name: "Operators"},
                    {name: "If-Else & Switch"},
                    {name: "Functions"},
                    {name: "Loops & Arrays"},
                ],
            },
            {
                name: "TypeScript",
                level: 5,
                icon: <SiTypescript size={24} color="#3178C6" />,
                description: "Currently practicing TypeScript.",
                knowledge: [
                    {name: "Basic"},
                    {name: "Functions"},
                    {name: "Interfaces"},
                    {name: "Generics"},
                ],
            },
            {
                name: "PHP",
                level: 5,
                icon: <SiPhp size={24} color="#3178C6" />,
                description: "Not yet learned",
                knowledge: [
                    {name: "Basic"},
                    {name: "Functions"},
                    {name: "Interfaces"},
                    {name: "Generics"},
                ],
            },
            {
                name: "Python",
                level: 5,
                icon: <SiPython size={24} color="#466FBB" />,
                description: "Currently practicing Python.",
                knowledge: [{name: "Basic"}],
            },
        ],
    },
    {
        category: "Libraries & Frameworks",
        items: [
            {
                name: "React",
                level: 5,
                icon: <FaReact size={24} color="#61DBFB" />,
                description: "I have some basic knowledge of React.",
                knowledge: [
                    {name: "Basic"},
                    {name: "Components"},
                    {name: "Props"},
                    {name: "State"},
                    {name: "Lifecycle"},
                    {name: "Hooks"},
                    {name: "Routing"},
                ],
            },
            {
                name: "React Native",
                level: 5,
                icon: <FaReact size={24} color="#61DBFB" />,
                description: "Currently practicing React Native",
                knowledge: [
                    {name: "Basic"},
                    {name: "Components"},
                    {name: "Props"},
                    {name: "State"},
                    {name: "Lifecycle"},
                    {name: "Hooks"},
                    {name: "Routing"},
                ],
            },
            {
                name: "Next.js",
                level: 5,
                icon: <SiNextdotjs size={24} color="#000000" />,
                description: "I use NextJs for some of my projects",
                knowledge: [
                    {name: "Basic"},
                    {name: "Rendering"},
                    {name: "Data Fetching"},
                ],
            },
            {
                name: "ExpressJs",
                level: 5,
                icon: <SiExpress size={24} />,
                description: "Currently practicing ExpressJs",
                knowledge: [
                    {name: "Basic"},
                    {name: "Rendering"},
                    {name: "Data Fetching"},
                ],
            },
            {
                name: "Laravel",
                level: 5,
                icon: <SiLaravel size={24} color="#f9322c" />,
                description: "Not yet learned",
                knowledge: [
                    {name: "Basic"},
                    {name: "Rendering"},
                    {name: "Data Fetching"},
                ],
            },
            {
                name: "Tailwind",
                level: 5,
                icon: <SiTailwindcss size={24} color="#0EA5E9" />,
                description: "I'm using Tailwind CSS for my projects.",
                knowledge: [
                    {name: "Basic"},
                    {name: "Components"},
                    {name: "Utilities"},
                ],
            },
        ],
    },
    {
        category: "Databases & Runtime",
        items: [
            {
                name: "NodeJs",
                level: 5,
                icon: <SiNodedotjs size={24} color="#68A063" />,
                description: "Currently practicing NodeJs.",
                knowledge: [
                    {name: "Basic"},
                    {name: "Insert"},
                    {name: "Find"},
                    {name: "Update"},
                    {name: "Delete"},
                ],
            },
            {
                name: "MongoDB",
                level: 5,
                icon: <SiMongodb size={24} color="#68A063" />,
                description: "Currently practicing MongoDB.",
                knowledge: [
                    {name: "Basic"},
                    {name: "Insert"},
                    {name: "Find"},
                    {name: "Update"},
                    {name: "Delete"},
                ],
            },
            {
                name: "MySQL",
                level: 5,
                icon: <SiMysql size={24} color="#466FBB" />,
                description: "Not yet learned",
                knowledge: [
                    {name: "Basic"},
                    {name: "Insert"},
                    {name: "Find"},
                    {name: "Update"},
                    {name: "Delete"},
                ],
            },
            {
                name: "Firebase",
                level: 5,
                icon: <SiFirebase size={24} color="#ff9100" />,
                description: "I use firebase for some of my projects",
                knowledge: [
                    {name: "Basic"},
                    {name: "Insert"},
                    {name: "Find"},
                    {name: "Update"},
                    {name: "Delete"},
                ],
            },
            {
                name: "Supabase",
                level: 5,
                icon: <SiSupabase size={24} color="#006139" />,
                description: "Not yet learned",
                knowledge: [
                    {name: "Basic"},
                    {name: "Insert"},
                    {name: "Find"},
                    {name: "Update"},
                    {name: "Delete"},
                ],
            },
        ],
    },
];
