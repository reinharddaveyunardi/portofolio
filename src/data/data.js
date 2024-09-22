import { FaCss3, FaHtml5, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiPython, SiMysql, SiLaravel, SiPhp, SiFirebase, SiSupabase } from "react-icons/si";

export const me = [
    {
        name: "Reinhard Dave Yunardi",
        description: "I am currently in high school",
    },
];

export const links = [
    {
        name: "Github",
        url: "https://github.com/reinharddaveyunardi",
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/reinhard-dave-yunardi",
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/itsme.xell/",
    },
];

export const projects = [
    {
        prevImg: "/images/portfolio.png",
        name: "Portfolio",
        description: "Portfolio",
        url: "https://github.com/reinharddave/portfolio",
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
                description: "In HTML, I have learned the basics of web development.",
                knowledge: [
                    { name: "Basic" },
                    { name: "Element" },
                    { name: "Attribute" },
                    { name: "Headings" },
                    { name: "Paragraph" },
                    { name: "Classes & Id" },
                    { name: "Formatting" },
                    { name: "Tables & Lists" },
                    { name: "Image & Link" },
                ],
            },
            {
                name: "CSS",
                level: 5,
                icon: <FaCss3 size={24} color="#2A8BD1" />,
                description: "In CSS, I have learned the basics of web development on styling.",
                knowledge: [
                    { name: "Syntax" },
                    { name: "Padding & Margin" },
                    { name: "Height & Width" },
                    { name: "Justify & Align" },
                    { name: "Flexbox & Grid" },
                    { name: "Min & Max" },
                    { name: "Media Queries" },
                    { name: "Responsive Design" },
                ],
            },
            {
                name: "JavaScript",
                level: 5,
                icon: <FaJs size={24} color="#F0DB4F" />,
                description: "Currently practicing JavaScript.",
                knowledge: [{ name: "Basic" }, { name: "Variables & Data Types" }, { name: "Operators" }, { name: "If-Else & Switch" }, { name: "Functions" }, { name: "Loops & Arrays" }],
            },
            {
                name: "TypeScript",
                level: 5,
                icon: <SiTypescript size={24} color="#3178C6" />,
                description: "Currently practicing TypeScript.",
                knowledge: [{ name: "Basic" }, { name: "Functions" }, { name: "Interfaces" }, { name: "Generics" }],
            },
            {
                name: "PHP",
                level: 5,
                icon: <SiPhp size={24} color="#3178C6" />,
                description: "Not yet learned",
                knowledge: [{ name: "Basic" }, { name: "Functions" }, { name: "Interfaces" }, { name: "Generics" }],
            },
            {
                name: "Python",
                level: 5,
                icon: <SiPython size={24} color="#466FBB" />,
                description: "Currently practicing Python.",
                knowledge: [{ name: "Basic" }],
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
                knowledge: [{ name: "Basic" }, { name: "Components" }, { name: "Props" }, { name: "State" }, { name: "Lifecycle" }, { name: "Hooks" }, { name: "Routing" }],
            },
            {
                name: "Next.js",
                level: 5,
                icon: <SiNextdotjs size={24} color="#000000" />,
                description: "I use firebase for some of my projects",
                knowledge: [{ name: "Basic" }, { name: "Rendering" }, { name: "Data Fetching" }],
            },
            {
                name: "Laravel",
                level: 5,
                icon: <SiLaravel size={24} color="#f9322c" />,
                description: "Not yet learned",
                knowledge: [{ name: "Basic" }, { name: "Rendering" }, { name: "Data Fetching" }],
            },
            {
                name: "Tailwind",
                level: 5,
                icon: <SiTailwindcss size={24} color="#0EA5E9" />,
                description: "I'm using Tailwind CSS for my projects.",
                knowledge: [{ name: "Basic" }, { name: "Components" }, { name: "Utilities" }],
            },
        ],
    },
    {
        category: "Databases",
        items: [
            {
                name: "MongoDB",
                level: 5,
                icon: <SiMongodb size={24} color="#68A063" />,
                description: "Currently practicing MongoDB.",
                knowledge: [{ name: "Basic" }, { name: "Insert" }, { name: "Find" }, { name: "Update" }, { name: "Delete" }],
            },
            {
                name: "MySQL",
                level: 5,
                icon: <SiMysql size={24} color="#466FBB" />,
                description: "Not yet learned",
                knowledge: [{ name: "Basic" }, { name: "Insert" }, { name: "Find" }, { name: "Update" }, { name: "Delete" }],
            },
            {
                name: "Firebase",
                level: 5,
                icon: <SiFirebase size={24} color="#ff9100" />,
                description: "I use firebase for some of my projects",
                knowledge: [{ name: "Basic" }, { name: "Insert" }, { name: "Find" }, { name: "Update" }, { name: "Delete" }],
            },
            {
                name: "Supabase",
                level: 5,
                icon: <SiSupabase size={24} color="#006139" />,
                description: "Not yet learned",
                knowledge: [{ name: "Basic" }, { name: "Insert" }, { name: "Find" }, { name: "Update" }, { name: "Delete" }],
            },
        ],
    },
];
