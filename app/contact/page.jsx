"use client";
import React, { useRef } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import HomeIcon from "@mui/icons-material/Home";
import ContactsTwoToneIcon from "@mui/icons-material/ContactsTwoTone";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Page = () => {
    const contactRef = useRef()
    useGSAP(() => {
        gsap.fromTo(contactRef.current
            , {
                scale: 0,
                opacity: 0
            }
            , {
                scale: 1,
                opacity: 1,
                duration: 1,
                ease: "power1.inOut"
            }
        )
    })

    return (
        <div className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-amber-50 to-amber-100 px-4 py-8">
            <div ref={contactRef} className="w-full max-w-6xl bg-white shadow-2xl rounded-3xl overflow-hidden">
                {/* Header */}
                <div className="bg-amber-200 px-8 py-6 flex flex-col gap-3 md:gap-6 items-center text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Have Any Questions?</h1>
                    <div className="flex flex-col md:flex-row justify-between w-full max-w-4xl text-gray-700 text-sm md:text-base gap-4">
                        <div className="flex items-center gap-2">
                            <MailOutlineIcon className="text-amber-600" />
                            <span>shantadurgagothan@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <HomeIcon className="text-amber-600" />
                            <span>Gauthan, Veling, Mardol - Goa 403401</span>
                        </div>
                    </div>
                </div>

                {/* Main Body */}
                <div className="flex flex-col md:flex-row h-full">
                    {/* Left Side */}
                    <div className="w-full md:w-1/2 bg-amber-100 flex justify-center items-center p-10">
                        <div className="w-56 h-56 md:w-72 md:h-72 bg-gradient-to-br from-amber-300 via-amber-200 to-amber-100 rounded-full flex justify-center items-center shadow-inner animate-beigeGradientFlow">
                            <ContactsTwoToneIcon className="text-amber-700" style={{ fontSize: "6rem" }} />
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="w-full md:w-1/2 bg-white px-8 py-10 flex flex-col justify-center items-center">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
                        <form className="w-full max-w-md space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Your full name"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="you@example.com"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Write your message here..."
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-amber-400"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg py-2 transition duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
