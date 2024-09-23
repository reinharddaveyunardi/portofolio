import React from "react";
import {projects} from "@/data/data";
import {FaLink} from "react-icons/fa";

function ProjectCard({
    name,
    prevImg,
    url,
    theme,
    production,
    icons,
    description,
    key,
}: {
    name: string;
    production: string;
    theme?: string;
    prevImg: string;
    url: string;
    description: string;
    icons: any;
    key: any;
}) {
    return (
        <div className="flex flex-col md:flex-row lg:flex-row w-full justify-evenly gap-6 p-6 md:p-0 lg:p-0">
            <div
                className="bg-white p-2 w-auto md:w-[480px] rounded-lg text-black"
                key={key}
            >
                <a href={url} className="">
                    <div>
                        <img className="rounded-md" src={prevImg} />
                    </div>
                </a>
                <div>
                    <div className="flex flex-col gap-2 px-2">
                        <div className="flex flex-col py-2">
                            <small>{theme}</small>
                            <small>{production}</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-auto md:w-[480px]">
                <div className="h-full flex flex-col gap-4 justify-between">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-3xl font-bold">{name}</h1>
                        <div className="flex gap-4">{icons}</div>
                        <div className="flex justify-start">
                            <div className="w-7/12 h-[1px] bg-white" />
                        </div>
                    </div>
                    <div className="pb-16 flex flex-col gap-4">
                        <small>{description}</small>
                        <div className="w-fit hover:underline">
                            <a
                                href={url}
                                className="flex h-auto w-fit items-center gap-2"
                            >
                                <small>View website</small>
                                <i>
                                    <FaLink />
                                </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Projects() {
    return (
        <div className="w-full bg-black text-white">
            <div className="flex flex-col justify-between py-6 gap-16">
                <div className="flex justify-center">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                        My Project
                    </h1>
                </div>
                <div className="p-2 gap-0 flex flex-col md:gap-6 lg:gap-7">
                    {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Projects;
