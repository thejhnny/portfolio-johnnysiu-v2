"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

function About() {
    const { ref } = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            id="about"
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
        >
            <SectionHeading>About Me</SectionHeading>

            <p className="mb-3">
                After graduating with a degree in{" "}
                <span className="font-medium">Applied Mathematics</span> from
                UCLA, I worked as an Accountant at Transamerica. In that role, I
                worked closely with programmers and developed an interest in
                programming. This led me to enroll in a coding bootcamp at{" "}
                <span className="font-medium">Hack Reactor</span>, where I
                learned{" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span>{" "}
                is the problem-solving aspect. I{" "}
                <span className="underline">love</span> the feeling of finally
                figuring out a solution to a problem. I am currently looking for
                a <span className="font-medium">full-time position</span> as a
                software developer.
            </p>

            <p>
                <span className="italic">When I&apos;m not coding</span>, I enjoy
                spending time with my family, rock climbing, playing tennis and
                basketball, watching movies, and playing with my dog. I also
                enjoy <span className="font-medium">learning new things</span>.
                I am currently learning about{" "}
                <span className="font-medium">AI and Machine Learning</span>.
                I&apos;m also learning how to play pickleball.
            </p>
        </motion.section>
    );
}

export default About;
