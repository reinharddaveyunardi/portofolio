"use client";
import React from "react";
import { me, links } from "@/data/data";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaQuestion } from "react-icons/fa";
import BlurIn from "@/components/magicui/blur-in";
import WordPullUp from "@/components/magicui/word-pull-up";
import GradualSpacing from "@/components/magicui/gradual-spacing";
const getLinkIcon = (linkName: string) => {
    switch (linkName) {
        case "Github":
            return <FaGithub size={24} />;
        case "LinkedIn":
            return <FaLinkedin size={24} />;
        case "Instagram":
            return <FaInstagram size={24} />;
        default:
            return <FaQuestion size={24} />;
    }
};

function Hero() {
    return (
        <div className="w-full h-screen bg-black text-white">
            <div>
                {me.map((my, index) => {
                    return (
                        <div key={index} className="flex flex-col gap-2 justify-center items-center h-screen">
                            <div>
                                <BlurIn word={`I'm ${my.name}`} />
                            </div>
                            <div className="text-lg md:text-xl lg:text-2xl flex gap-1">
                                <WordPullUp words={my.description} />
                            </div>
                            <motion.div initial={{ opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.5 }} className="flex gap-4">
                                {links.map((link,index) => {
                                    return (
                                        <a key={index} href={link.url} className="">
                                            {getLinkIcon(link.name)}
                                        </a>
                                    );
                                })}
                            </motion.div>
                            <GradualSpacing text={"Currently in progress"} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Hero;
