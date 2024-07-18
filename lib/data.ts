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
        description: "I gradudated from Hack Reactor",
        icon: React.createElement(LuGraduationCap),
        date: "2018",
    },
    {
        title: "Accountant",
        location: "Orlando, FL",
        description: "I worked as an Accountant at Transamerica.",
        icon: React.createElement(CgWorkAlt),
        date: "2012 - 2017",
    },
    {
        title: "Graduated from UCLA",
        location: "Los Angeles, CA",
        description:
            "I gradudated from UCLA with a B.S in Applied Mathematics and a minor in Chinese",
        icon: React.createElement(LuGraduationCap),
        date: "2011",
    },
] as const;

export const projectsData = [
    {
        title: "ABCmouse",
        description:
            "I worked as a full-stack developer developing features for ABCmouse app.",
        tags: ["AngularJS", "PHP", "MySQL", "C#", "Unity"],
        imageUrl: abcmouseImg,
    },
    {
        title: "Tilt",
        description:
            "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
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
