"use client";
import React from "react";
import { skills } from "@/data/data";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const firstRow = skills.find((category) => category.category === "Programming Languages")?.items || [];
const secondRow = skills.find((category) => category.category === "Libraries & Frameworks")?.items || [];
const fourthRow = skills.find((category) => category.category === "Databases")?.items || [];

const SkillCard = ({ icon, name, description }: { icon: any; name: string; description: string }) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <i>{icon}</i>
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
                    <p className="text-xs font-medium dark:text-white/40">{description}</p>
                </div>
            </div>
        </figure>
    );
};

export function Skills() {
    return (
        <div className="h-screen w-full flex-col items-center justify-between flex">
            <h1 className="pt-32 text-2xl md:text-3xl lg:text-6xl font-bold">MY SKILLS</h1>
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
                <h1>Programming Languages & Markup Languages</h1>
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((skill) => (
                        <SkillCard key={skill.name} {...skill} />
                    ))}
                </Marquee>

                <h1>Libraries & Frameworks</h1>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((skill) => (
                        <SkillCard key={skill.name} {...skill} />
                    ))}
                </Marquee>
                <h1>Database</h1>
                <Marquee reverse pauseOnHover className="[--duration:15s]">
                    {fourthRow.map((skill) => (
                        <SkillCard key={skill.name} {...skill} />
                    ))}
                </Marquee>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>
        </div>
    );
}
