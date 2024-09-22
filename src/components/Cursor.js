"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";

function Cursor() {
    useEffect(() => {
        const cursor = document.getElementById("custom-cursor");
        const links = document.querySelectorAll("a");
        const text = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, span");
        const image = document.querySelectorAll("img");
        const cursorText = cursor.querySelector(".cursor-text");

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;

            gsap.to(cursor, {
                x: clientX,
                y: clientY,
            });
        };

        const onMouseEnter = (e) => {
            const target = e.target;
            if (target.classList.contains("view")) {
                gsap.to(cursor, { scale: 8 });
                cursorText.style.display = "none";
            }
            if (target.classList.contains("text")) {
                gsap.to(cursor, { scale: 4 });
                cursorText.style.display = "none";
            }
            if (target.classList.contains("image")) {
                gsap.to(cursor, { scale: 4 });
                cursorText.style.display = "none";
            } else {
                gsap.to(cursor, { scale: 4 });
            }
        };

        const onMouseLeave = () => {
            gsap.to(cursor, { scale: 1 });
            cursorText.style.display = "none";
        };

        document.addEventListener("mousemove", onMouseMove);

        links.forEach((link) => {
            link.addEventListener("mouseenter", onMouseEnter);
            link.addEventListener("mouseleave", onMouseLeave);
        });

        image.forEach((link) => {
            link.addEventListener("mouseenter", onMouseEnter);
            link.addEventListener("mouseleave", onMouseLeave);
        });

        text.forEach((link) => {
            link.addEventListener("mouseenter", onMouseEnter);
            link.addEventListener("mouseleave", onMouseLeave);
        });
    });
    return (
        <div id="custom-cursor" className="custom-cursor">
            <span className="cursor-text">View</span>
        </div>
    );
}

export default Cursor;
