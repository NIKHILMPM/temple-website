"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [scrollDir, setScrollDir] = useState("up");
    const navRef = useRef(null);
    const prevScrollY = useRef(0);

    const navLinks = [
        { title: "HOME", link: "/" },
        { title: "ABOUT US", link: "/about" },
        { title: "COMMITTE", link: "/committe" },
        { title: "UTSAV", link: "/utsav" },
        { title: "SEVA", link: "/seva" },
        { title: "ROOMS", link: "/rooms" },
        { title: "GALLERY", link: "/gallery" },
        { title: "CONTACT US", link: "/contact" },
    ];

    // Scroll detection effect
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > prevScrollY.current && currentScrollY > 50) {
                if (scrollDir !== "down") setScrollDir("down");
            } else {
                if (scrollDir !== "up") setScrollDir("up");
            }
            prevScrollY.current = currentScrollY;
        };

        const handleMouseMove = (e) => {
            if (e.clientY <= 100 && scrollDir === "down") {
                setScrollDir("up");
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, [scrollDir]);



    useGSAP(() => {
        gsap.fromTo(
            ".spanGsap",
            { opacity: 0 },
            {
                opacity: 1,
                stagger: 0.08,
                duration: 0.5,
                ease: "power2.out",
                delay: 0.2,
            }
        );
    }, [isOpen]);

    const handleOpen = () => {
        setIsVisible(true);
        requestAnimationFrame(() => {
            gsap.fromTo(
                navRef.current,
                { x: 1000 },
                { x: 0, duration: 0.6, ease: "power3.out" }
            );
        });
        setIsOpen(true);
    };

    const handleClose = () => {
        gsap.to(navRef.current, {
            x: 1000,
            duration: 0.6,
            ease: "power3.in",
            onComplete: () => {
                setIsOpen(false);
                setIsVisible(false);
            },
        });
    };

    return (
        <>
            {/* Navbar only when menu is closed */}
            {!isOpen && (
                <nav
                    className={`fixed top-0 left-0 h-20 w-full flex justify-between items-center px-4 py-2 bg-gradient-to-b from-white/85 to-transparent  z-50 transition-transform duration-300 ease-in-out ${scrollDir === "down" ? "-translate-y-full" : "translate-y-0"
                        }`}
                >
                    <Link href={"/"}>
                        <span className="p-3">
                            <Image
                                src="/background/logo.png"
                                alt="home"
                                width={80} // add appropriate width
                                height={80} // add appropriate height
                            />
                        </span>
                    </Link>

                    <span onClick={handleOpen} className="cursor-pointer text-red-700 text-hover">
                        <DensityMediumIcon />
                    </span>
                </nav>
            )}

            {/* Full screen overlay menu */}
            {isVisible && (
                <nav
                    ref={navRef}
                    className="fixed inset-0 w-screen h-screen flex flex-col pt-4 backdrop-blur-2xl bg-black/30 z-50"
                >
                    <div className="flex justify-end h-[10%] w-full p-1 px-7">
                        <span className="text-hover text-white text-3xl " onClick={handleClose}>
                            <CloseRoundedIcon />
                        </span>
                    </div>
                    <div className="flex flex-col items-center pt-4 gap-12 text-3xl md:gap-6 md:text-2xl w-full h-[90%] font-black text-white">
                        {navLinks.map((item, index) => (
                            <Link
                                onClick={handleClose}
                                key={index}
                                href={item.link}
                                className="w-[70%] flex justify-center spanGsap text-hover"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </nav>
            )}
        </>
    );
};

export default Navbar;
