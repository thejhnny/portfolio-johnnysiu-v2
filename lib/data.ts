import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import abcmouseImg from "@/public/abcmouse.png";
import tiltLogo from "@/public/tilt-logo.png";
import comingSoonImg from "@/public/coming_soon.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Software Engineer III at Age of Learning",
        location: "Glendale, CA",
        description:
            "I worked as a front-end developer for about 2 years then upskilled to a fullstack developer",
        icon: React.createElement(CgWorkAlt),
        date: "2018 - 2022",
    },
    {
        title: "Software Engineer at Tilt",
        location: "Long Beach, CA",
        description: "I worked as a contracting software engineer",
        icon: React.createElement(CgWorkAlt),
        date: "2020 - 2021",
    },
    {
        title: "Graduated from Hack Reactor",
        location: "Los Angeles, CA",
        description: "I graduated from Hack Reactor, an Advanced Software Engineering Immersive Program",
        icon: React.createElement(LuGraduationCap),
        date: "2018",
    },
    {
        title: "Accountant at Transamerica",
        location: "Los Angeles, CA",
        description: "I worked as an Accountant at Transamerica.",
        icon: React.createElement(CgWorkAlt),
        date: "2012 - 2017",
    },
    {
        title: "Graduated from UCLA",
        location: "Los Angeles, CA",
        description:
            "I graduated from UCLA with a B.S in Applied Mathematics and a minor in Chinese",
        icon: React.createElement(LuGraduationCap),
        date: "2007 - 2011",
    },
] as const;

export const projectsData = [
    {
        title: "ABCmouse",
        description:
            "An early learning platform designed for children ages 2 to 8. It offers a comprehensive curriculum that includes reading, math, science, and art.",
        tags: ["AngularJS", "PHP", "MySQL", "C#", "Unity"],
        imageUrl: abcmouseImg,
    },
    {
        title: "Tilt",
        description:
            "EdTech platform helping underserved high school seniors find colleges and evaluate student aid.",
        tags: [
            "React",
            "TypeScript",
            "Next.js",
            "Python",
            "Django",
            "GraphQL",
            "WordPress",
        ],
        imageUrl: tiltLogo,
    },
    {
        title: "What To Eat",
        description:
            "A mobile app that helps people decide what to order at restaurants based off their preferences",
        tags: [
            "React",
            "React Native",
            "TypeScript",
            "Node.js",
            "PostgreSQL",
            "Tailwind CSS",
        ],
        imageUrl: comingSoonImg,
    },
] as const;

export const skillsData = [
    "JavaScript",
    "React",
    "Node.js",
    "TypeScript",
    "Python",
    "Git",
    "HTML",
    "CSS",
    "React Native",
    "Redux",
    "AngularJS",
    "GraphQL",
    "Next.js",
    "Express",
    "Tailwind CSS",
    "Django",
    "MySQL",
    "PostgreSQL",
    "PHP",
    "C#",
    "Unity",
    "Framer Motion",
] as const;
