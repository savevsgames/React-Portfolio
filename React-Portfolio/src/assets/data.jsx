import { FaHtml5, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss3Alt, FaGithub } from "react-icons/fa6";

export const links = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#aboutme", text: "about me" },
  { id: 3, href: "#portfolio", text: "portfolio" },
  { id: 4, href: "#contact", text: "contact" },
  { id: 5, href: "#resume", text: "resume" },
];

export const hero = {
  img: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export const skills = [
  {
    id: 1,
    title: "HTML&CSS",
    icon: (
      <span className="flex flex-row">
        <FaHtml5 className="h-12 w-12 text-sky-950" />
        <FaCss3Alt className="h-12 w-12 text-sky-950" />
      </span>
    ),
    text: "Artistic and creative design skills, with a focus on responsive web design and a strong understanding of web standards and best practices",
  },
  {
    id: 2,
    title: "Javascript",
    icon: <FaJs className="h-12 w-12 text-sky-950" />,
    text: "I love JavaScript, and I have a strong understanding of the language. I enjoy making the web interactive and dynamic in creative ways.",
  },
  {
    id: 3,
    title: "Typescript",
    icon: <SiTypescript className="h-12 w-12 text-sky-950" />,
    text: "I have a strong understanding of TypeScript, and I enjoy using it to write clean, maintainable code with fewer bugs.",
  },
  {
    id: 4,
    title: "React",
    icon: <FaReact className="h-12 w-12 text-sky-950" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: 5,
    title: "Python",
    icon: <FaPython className="h-12 w-12 text-sky-950" />,
    text: "I enjoy writing algorithms and coding arduino projects in Python. I have a strong understanding of the language and its libraries.",
  },
  {
    id: 6,
    title: "PostgreSQL FaGithub",
    icon: <BiLogoPostgresql className="h-12 w-12 text-sky-950" />,
    text: "I have experience with PostgreSQL, and cloud-based databases. I enjoy 3NF database design and writing efficient queries.",
  },
  {
    id: 7,
    title: "Github",
    icon: <FaGithub className="h-12 w-12 text-sky-950" />,
    text: "I use GitHub for version control and collaboration. I enjoy contributing to open-source projects and the idea of sharing my code with the community.",
  },
];

export const projects = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/savevsgames",
    title: "first project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/savevsgames",
    title: "second project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/savevsgames",
    title: "third project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/savevsgames",
    title: "first project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/savevsgames",
    title: "second project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    url: "https://react-projects.netlify.app/",
    github: "https://github.com/savevsgames",
    title: "third project",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
  },
];
