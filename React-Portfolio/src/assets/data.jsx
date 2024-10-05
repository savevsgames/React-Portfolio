import { FaHtml5, FaJs, FaReact, FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss3Alt, FaGithub } from "react-icons/fa6";

export const hero = {
  img: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export const defaultImg = {
  img: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

export const skills = [
  {
    id: 1,
    title: "HTML&CSS",
    icon: (
      <span className="flex flex-row">
        <FaHtml5 className="text-slate-500 h-8 w-8" />
        <FaCss3Alt className="text-slate-500 h-8 w-8" />
      </span>
    ),
    icon2: (
      <span className="flex flex-row">
        <FaHtml5 className="text-sky-950 h-16 w-16" />
        <FaCss3Alt className="text-sky-950 h-16 w-16" />
      </span>
    ),
    text: "Artistic and creative design skills, with a focus on responsive web design and a strong understanding of web standards and best practices",
  },
  {
    id: 2,
    title: "Javascript",
    icon: <FaJs className="text-slate-500 h-8 w-8" />,
    icon2: <FaJs className="text-sky-950 h-16 w-16" />,
    text: "I love JavaScript, and I have a strong understanding of the language. I enjoy making the web interactive and dynamic in creative ways.",
  },
  {
    id: 3,
    title: "Typescript",
    icon: <SiTypescript className=" text-slate-500 h-8 w-8" />,
    icon2: <SiTypescript className=" text-sky-950 h-16 w-16" />,
    text: "I have a strong understanding of TypeScript, and I enjoy using it to write clean, maintainable code with fewer bugs.",
  },
  {
    id: 4,
    title: "React",
    icon: <FaReact className=" text-slate-500 h-8 w-8" />,
    icon2: <FaReact className=" text-sky-950 h-16 w-16" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
  {
    id: 5,
    title: "Python",
    icon: <FaPython className=" text-slate-500 h-8 w-8" />,
    icon2: <FaPython className=" text-sky-950 h-16 w-16" />,
    text: "I enjoy writing algorithms and coding arduino projects in Python. I have a strong understanding of the language and its libraries.",
  },
  {
    id: 6,
    title: "PostgreSQL",
    icon: <BiLogoPostgresql className="text-slate-500 h-8 w-8" />,
    icon2: <BiLogoPostgresql className="text-sky-950 h-16 w-16" />,
    text: "I have experience with PostgreSQL, and cloud-based databases. I enjoy 3NF database design and writing efficient queries.",
  },
  {
    id: 7,
    title: "Github",
    icon: <FaGithub className="text-slate-500 h-8 w-8" />,
    icon2: <FaGithub className="text-sky-950 h-16 w-16" />,
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

export const about = [
  {
    id: 1,
    heading: `Hi, I'm Greg Barker. I am a motivated and enthusiastic web designer, dedicated to delivering high-quality websites and development projects.`,
    content: [
      `I am able to communicate effectively with clients and team members, ensuring a productive and consistent workflow.`,
      `I am eager to collaborate with skilled and dedicated professionals to further enhance technical skills and industry practices.`,
    ],
    image: defaultImg,
    imageInfo: "Greg Barker",
  },
  {
    id: 2,
    heading: `Coding has become a gateway that is helping me bridge the gap between my creative and technical skills.`,
    content: [
      `I started coding in high school but did not pursue it as a career. Instead I followed a path that led me to becoming a Master Electrician and running projects. I have always enjoyed learning systems and how they work. I am a natural problem solver and as technology advanced I found myself drawn to learning to code again. I started independently by doing online tutorials in hopes that I would be able to create a game. I caught the coding bug and took on the challenge of designing a website for a friend to replace their Shopify page. When things started to click I decided to take the plunge and enroll in the EdX Full-Stack Developer Coding Bootcamp. I am excited to see where this journey takes me.`,
    ],
    image: defaultImg,
    imageInfo: "Greg Barker",
  },
  {
    id: 3,
    heading: `Creativity and Technology have always been a part of my life.`,
    content: [
      `I am a musician and have played guitar for over 25 years now. I ran a recording studio for a few years and recorded songs for local artists and bands and live shows. I love recording and mixing music on old analog gear.`,
      `I am an amateur commercial photographer and have successfully created profitable Amazon listings with my photos. I enjoy using Abode Creative cloud programs to craft visually intriguing images and add them to my digital projects. I have created advertisements for social media and websites for local businesses.`,
    ],
    image: defaultImg,
    imageInfo: "Greg Barker",
  },
  {
    id: 4,
    heading: `I am a World Builder.`,
    content: [
      `I am an amateur writer and working on a novel that has slowly adapted itself into becoming a game instead. I call it Shadowtide Island and when I have extra time, or need a recharge, I work on it. I am eager to share it with people.`,
      `I have many ideas and interests, and I am always looking for new ways to learn and grow. I am excited for the journey ahead and all the advancements in technology that I will be able to harness. The future is now.`,
    ],
    image: defaultImg,
    imageInfo: "Greg Barker",
  },
];
