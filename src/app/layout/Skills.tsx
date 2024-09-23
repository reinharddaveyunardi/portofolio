"use client";
import React from "react";
import {skills} from "@/data/data";
import {cn} from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import OrbitingCircles from "@/components/magicui/orbiting-circles";
import {
    SiFirebase,
    SiJavascript,
    SiNextdotjs,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";

const firstRow =
    skills.find((category) => category.category === "Programming Languages")
        ?.items || [];
const secondRow =
    skills.find((category) => category.category === "Libraries & Frameworks")
        ?.items || [];
const fourthRow =
    skills.find((category) => category.category === "Databases & Runtime")
        ?.items || [];

const SkillCard = ({
    icon,
    name,
    description,
}: {
    icon: any;
    name: string;
    description: string;
}) => {
    return (
        <figure
            className={cn(
                "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                "bg-gray-950/[.01]"
            )}
        >
            <div className="flex flex-row items-center gap-2">
                <i>{icon}</i>
                <div className="flex flex-col">
                    <figcaption className="text-sm font-medium dark:text-white">
                        {name}
                    </figcaption>
                    <p className="text-xs font-medium dark:text-white/40">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};

// export default function Skills() {
//     const [mode, setMode] = useState(false);
//     return (
//         <div>
//             <div className="flex justify-center absolute h-screen w-full">
//                 <button onClick={() => (mode ? setMode(false) : setMode(true))}>
//                     View mode: {mode ? "Infinite" : "Orbiting"}
//                 </button>
//             </div>
//             {mode ? (
//                 <div className="w-full flex flex-col items-center justify-between">
//                     <h1 className="pt-32 text-2xl md:text-3xl lg:text-6xl font-bold">
//                         MY SKILLS
//                     </h1>
//                     <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background border-none">
//                         <h1>Programming Languages & Markup Languages</h1>
//                         <Marquee pauseOnHover className="[--duration:20s]">
//                             {firstRow.map((skill) => (
//                                 <SkillCard key={skill.name} {...skill} />
//                             ))}
//                         </Marquee>

//                         <h1>Libraries & Frameworks</h1>
//                         <Marquee
//                             reverse
//                             pauseOnHover
//                             className="[--duration:20s]"
//                         >
//                             {secondRow.map((skill) => (
//                                 <SkillCard key={skill.name} {...skill} />
//                             ))}
//                         </Marquee>
//                         <h1>Database & Runtime</h1>
//                         <Marquee
//                             reverse
//                             pauseOnHover
//                             className="[--duration:15s]"
//                         >
//                             {fourthRow.map((skill) => (
//                                 <SkillCard key={skill.name} {...skill} />
//                             ))}
//                         </Marquee>

//                         <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
//                         <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
//                     </div>
//                 </div>
//             ) : (
//                 <div className="block md:hidden lg:hidden">
//                     <MobileView />
//                 </div>
//             )}
//         </div>
//     );
// }
export default function Skills() {
    return (
        <div>
            <div className="w-full flex flex-col items-center justify-between">
                <h1 className="pt-32 text-2xl md:text-3xl lg:text-6xl font-bold">
                    MY SKILLS
                </h1>
                <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background border-none">
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
                    <h1>Database & Runtime</h1>
                    <Marquee reverse pauseOnHover className="[--duration:15s]">
                        {fourthRow.map((skill) => (
                            <SkillCard key={skill.name} {...skill} />
                        ))}
                    </Marquee>

                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
                </div>
            </div>
        </div>
    );
}

// function MobileView() {
//     return (
//         <div className="relative flex h-[800px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-xl">
//             <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
//                 Skills
//             </span>
//             <OrbitingCircles
//                 className="size-[30px] border-none bg-transparent"
//                 duration={20}
//                 delay={20}
//                 radius={80}
//             >
//                 <Icons.firebase />
//             </OrbitingCircles>
//             <OrbitingCircles
//                 className="size-[30px] border-none bg-transparent"
//                 duration={20}
//                 delay={10}
//                 radius={80}
//             >
//                 <Icons.js />
//             </OrbitingCircles>

//             {/* Outer Circles (reverse) */}
//             <OrbitingCircles
//                 className="size-[50px] border-none bg-transparent"
//                 radius={190}
//                 duration={20}
//                 reverse
//             >
//                 <Icons.tw />
//             </OrbitingCircles>
//             <OrbitingCircles
//                 className="size-[50px] border-none bg-transparent"
//                 radius={140}
//                 duration={20}
//                 reverse
//             >
//                 <Icons.ts />
//             </OrbitingCircles>
//             <OrbitingCircles
//                 className="size-[50px] border-none bg-transparent"
//                 radius={190}
//                 duration={20}
//                 delay={20}
//                 reverse
//             >
//                 <Icons.gitHub />
//             </OrbitingCircles>
//         </div>
//     );
// }

// const Icons = {
//     gitHub: () => <SiNextdotjs />,
//     js: () => <SiJavascript />,
//     tw: () => <SiTailwindcss />,
//     firebase: () => <SiFirebase />,
//     ts: () => <SiTypescript />,
// };
