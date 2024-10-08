"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

function Experience() {
    const { ref } = useSectionInView("Experience", 0.5);
    const { theme } = useTheme();

    return (
        <section
            ref={ref}
            id="experience"
            className="scroll-mt-28 mb-28 sm:mb-40"
        >
            <SectionHeading>My experience</SectionHeading>
            <VerticalTimeline
                lineColor={
                    theme === "light" ? "#e5e7eb" : "rgba(255, 255, 255, 0.2)"
                }
            >
                {experiencesData.map((item, index) => (
                    <VerticalTimelineElement
                        key={index}
                        contentStyle={{
                            background:
                                theme === "light"
                                    ? "#f3f4f6"
                                    : "rgba(255, 255, 255, 0.05)",
                            boxShadow: "none",
                            border: "1px solid rgba(0, 0, 0, 0.05)",
                            textAlign: "left",
                            padding: "1.3rem 2rem",
                        }}
                        contentArrowStyle={{
                            borderRight:
                                theme === "light"
                                    ? "0.4rem solid #9ca3af"
                                    : "0.4rem solid rbga(255, 255, 255, 0.5)",
                        }}
                        date={item.date}
                        dateClassName="min-[1170px]:ml-5 min-[1170px]:mr-5"
                        icon={item.icon}
                        iconStyle={{
                            background:
                                theme === "light"
                                    ? "white"
                                    : "rgba(255, 255, 255, 0.15",
                            fontSize: "1.5rem",
                        }}
                    >
                        <h3 className="font-semibold">
                            {item.title}
                        </h3>
                        <p className="font-normal !mt-0">{item.location}</p>
                        <p className="!mt-1 !font-normal text-gray-700 dark:text-white">
                            {item.description}
                        </p>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
}

export default Experience;
